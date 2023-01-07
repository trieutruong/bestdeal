import connectMongo from "../../utils/connectMongo";
import HandTool from '../../models/handtool';
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
    HandTool.find({}).then(handtools => res.json(handtools))
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

