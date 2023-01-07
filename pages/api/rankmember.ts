import connectMongo from "../../utils/connectMongo";
import RankMember from '../../models/rankmember';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest,
  res: NextApiResponse) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');

    const rankmember = await RankMember.find({})
    res.json(rankmember)
    
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
