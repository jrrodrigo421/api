// import { Request, Response } from 'express';
// import UserModel from '../models/user';

// export const loginAuth = async (req: Request, res: Response) => {
  
//   try {
//     // const users = await UserModel.find();
//     // res.json(users);
//     console.log('logoou');
//     res.json('LOGADO!')
    
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };


import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserModel from '../models/user';

export const loginAuth = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user || !bcrypt.compareSync(password, user.password as string)) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  // Verifica se process.env.JWT_SECRET é uma string
  if (typeof process.env.JWT_SECRET !== 'string') {
    return res.status(500).json({ message: 'JWT_SECRET não está definido corretamente' });
  }

  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
};
