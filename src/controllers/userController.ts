import { Request, Response } from 'express';
import UserModel from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
  console.log('loooooou');
  
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Outros controladores conforme necessário
