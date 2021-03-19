import { NextApiRequest, NextApiResponse } from 'next'

export default function getAllPeople(req: NextApiRequest, res: NextApiResponse){
    res.json({hello: 'world', method: req.method})
}