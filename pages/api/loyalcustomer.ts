import connectMongo from "../../utils/connectMongo";
import LoyalCustomer from '../../models/loyalcustomer';
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
    LoyalCustomer.find({}).then(loyalcustomers => res.json(loyalcustomers))
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

