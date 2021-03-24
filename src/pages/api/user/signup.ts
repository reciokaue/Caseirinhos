import { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcryptjs'
import sqlite from 'sqlite'

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const { name } = request.body;
    const { email } = request.body;
    const { password } = request.body;

    const db = await sqlite.open('./database/person.sqlite')

    //To do -> validate email, same email, and password length

    if (request.method === 'POST') {
        hash(password, 10, async function(err, hash) {
            const statement = await db.prepare('INSERT INTO person (name, email, password) values (?,?,?)');
            const result = await statement.run(name, email, hash);
            result.finalize();
        });

        response.json({message: "Welcome to the app!!!"})
    } else {
        response.status(405).json({ message: 'We only support POST' })
    }
}