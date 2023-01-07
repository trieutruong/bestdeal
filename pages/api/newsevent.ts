import connectMongo from "../../utils/connectMongo";
import NewsEvent from '../../models/newsevent';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  
}

export default async function handler( req: NextApiRequest,
  res: NextApiResponse) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    NewsEvent.find({}).then(newsevents => res.json(newsevents))
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

