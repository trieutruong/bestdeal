import connectMongo from "../../utils/connectMongo";
import Banner from '../../models/banner';
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
    // Banner.find({}).then(banners => res.json(banners))

    const banners = await Banner.find({})
    res.json(banners)
                                                              
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

