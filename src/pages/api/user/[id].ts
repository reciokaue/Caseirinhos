import { NextApiRequest, NextApiResponse  } from 'next'
import sqlite from 'sqlite'

export default async(request: NextApiRequest, response: NextApiResponse) => {
    
    if(request.method === "GET"){
        const id = request.query.id 
        const db = await sqlite.open('./database/person.sqlite')    
        
        const people = await db.get('SELECT * FROM person WHERE id = ?', [id])
        response.json(people)
        db.close()
    }else if(request.method === 'PUT'){
        // const { name } = request.body;
        // const { email } = request.body;
        // const { password } = request.body;

        // const statement = await db.prepare('UPDATE person SET name= ?, email = ? WHERE id = ?');
        // const result = await statement.run(name, email, id);
        // result.finalize();
    }else{
        response.json({message: 'We dont support POST'})
    }

}