import connectMongo from "../../utils/connectMongo";
import DoorLock from '../../models/doorlock';
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
    DoorLock.find({}).then(doorlocks => res.json(doorlocks))
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}


