import connectMongo from "../../utils/connectMongo";
import CoinPolicy from "../../models/coinpolicy";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest,
  res: NextApiResponse) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    CoinPolicy.find({}).then(coinpolicy => res.json(coinpolicy))
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

