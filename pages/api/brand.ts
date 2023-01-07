import connectMongo from "../../utils/connectMongo";
import Brand from '../../models/brand';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler( req: NextApiRequest,
  res: NextApiResponse) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    Brand.find({}).then(brands => res.json(brands))
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

