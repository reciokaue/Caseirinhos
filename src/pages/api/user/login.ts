import { NextApiRequest, NextApiResponse } from 'next'

import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import sqlite from 'sqlite'
import cookie from 'cookie'

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const { email } = request.body;
    const { password } = request.body;
    const db = await sqlite.open('./database/person.sqlite')

    const { GUID_TOKEN } = process.env

    if (request.method === 'POST') {
        let sql = 'SELECT * FROM person WHERE email = ?'
        const person = await db.get(sql, [email]);
        
        if(person === undefined){
            response.json({message: 'wrong email'});
        }else{
            compare(password, person.password, function(errors, result) {
                if(!errors && result){
                    const claims = { id: person.id}
                    const jwt = sign(claims, GUID_TOKEN, { expiresIn: '1hr' })

                    response.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV !== 'development',
                        sameSite: 'strict',
                        maxAge: 3600,
                        path: '/'
                    }) )
                    response.status(200).json({message: 'Welcome to the app!'});
                }else{
                    response.status(405).json({message: 'wrong password'});
                }
            });
        }
    } else {
        response.status(405).json({ message: 'We only support POST' })
    }
    db.close()
}