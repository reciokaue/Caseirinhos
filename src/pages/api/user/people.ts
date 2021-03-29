import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import sqlite from 'sqlite'
import { verify } from 'jsonwebtoken'

export const authenticated = (fn: NextApiHandler) => async (request: NextApiRequest, response: NextApiResponse) => {
    const { GUID_TOKEN } = process.env
    let token = request.cookies.auth!

    verify(token, GUID_TOKEN, async function(err, decoded) {
        if(!err && decoded){
            return await fn(request, response)
        }else{
            response.status(401).json({message: 'Sorry you are not authenticated'})
        }
    });
}

export default authenticated(async function getPeople(
    request: NextApiRequest,
    response: NextApiResponse
){
    if(request.method === "GET"){
        const db = await sqlite.open('./database/person.sqlite')
        const person = await db.all('SELECT  id, email, name FROM person')
    
        response.json(person);
        db.close();
    }else{
        response.json({message: 'We only support POST'});
    }
});