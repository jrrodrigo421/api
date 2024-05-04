import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserModel from '../models/user';

export const loginAuth = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  console.log('inicio loginAuth imprimindo body email ', req.body.email );
  console.log('inicio loginAuth imprimindo body senha', req.body.password );
  

  const user = await UserModel.findOne({ email });
  
  console.log('imprimindo usuario', user);
  
  //TODO pra quando começar a cadastrar atravé do front
  // if (!user || !bcrypt.compareSync(password, user.password as string)) {
  //   console.log('entrou no if e vai tomar o 401');
    
  //   return res.status(401).json({ message: 'Credenciais inválidas' });
  // }
  
  
  if (user?.email != req.body.email || user?.password != req.body.password) {
    console.log('entrou no if e vai tomar o 401');
    
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }
  
  console.log('typeOF typeof process.env.JWT_SECRET', typeof process.env.JWT_SECRET);

  // Verifica se process.env.JWT_SECRET é uma string
  if (typeof process.env.JWT_SECRET !== 'string') {
    console.log('entrou on if do jwt_secret');
    
    return res.status(500).json({ message: 'JWT_SECRET não está definido corretamente' });
  }

  const token = jwt.sign({ id: user?._id, email: user?.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
};
