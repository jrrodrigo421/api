import { Request, Response } from 'express';
import UserModel from '../models/user';

export const loginAuth = async (req: Request, res: Response) => {
  
  try {
    // const users = await UserModel.find();
    // res.json(users);
    console.log('logoou');
    res.json('LOGADO!')
    
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

