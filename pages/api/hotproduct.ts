import connectMongo from "../../utils/connectMongo";
import HotProduct from '../../models/hotproduct';
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
    HotProduct.find({}).then(hotproducts => res.json(hotproducts))
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

