import { Request, Response } from 'express';
import ProfessionalModel from '../models/professional';

export const getProfessionals = async (req: Request, res: Response) => {
  console.log('alooou');
  
  
  try {
    const professionals = await ProfessionalModel.find();
    res.json(professionals);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
export const postProfessionals = async (req: Request, res: Response) => {
  console.log('criando um novo profissional');
  
  
  try {
    const professionals = await ProfessionalModel.find();
    res.json(professionals);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
