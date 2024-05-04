import { Request, Response } from 'express';
import  User from '../models/user';
import bcrypt from 'bcrypt';

export const postNewRegister = async (req: Request, res: Response) => {
  console.log('Criando um novo usuário');

  try {
    // Validar os dados recebidos
    const { name, email, cpf, address, city, phone, password } = req.body;
    if (!name || !email || !cpf || !address || !city || !phone || !password) {
      return res.status(400).json({ message: 'Por favor, forneça todos os campos obrigatórios.' });
    }

    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Este e-mail já está em uso.' });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar um novo usuário
    const newUser = new User({
      name,
      email,
      cpf,
      address,
      city,
      phone,
      password: hashedPassword,
    });

    // Salvar o novo usuário no banco de dados
    const savedUser = await newUser.save();

    res.status(201).json({ message: 'Usuário criado com sucesso.', user: savedUser });
    console.log('Usuário criado com sucesso');
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
