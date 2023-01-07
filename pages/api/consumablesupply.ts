import connectMongo from "../../utils/connectMongo";
import ConsumableSupply from '../../models/consumablesupply';
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
    ConsumableSupply.find({}).then(consumablesupplies => res.json(consumablesupplies))
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}


