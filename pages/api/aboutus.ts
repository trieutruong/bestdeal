import connectMongo from "../../utils/connectMongo";
import AboutUs from '../../models/aboutus';
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
    AboutUs.find({}).then(infos => res.json(infos))
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

