import connectMongo from "../../utils/connectMongo";
import HandMachine from '../../models/handmachine';
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
    HandMachine.find({}).then(handmachines => res.json(handmachines))
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}


