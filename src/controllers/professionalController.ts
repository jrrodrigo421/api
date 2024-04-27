import { Request, Response } from 'express';
import ProfessionalModel, { Professional } from '../models/professional';


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
    // Extrai os dados do corpo da requisição
    const { name, category, location, availability } = req.body;

    
    const professionalData: Professional = {
      name: req.body.name,
      category: req.body.category,
      location: req.body.location,
      availability: req.body.availability,
      // Adicione outros campos conforme necessário
    } as Professional; 

    // Cria um novo documento Professional usando os dados fornecidos
    const newProfessional = new ProfessionalModel(professionalData);

    // Salva o novo profissional no banco de dados
    const savedProfessional = await newProfessional.save();

    // Retorna o novo profissional como resposta
    res.status(201).json(savedProfessional);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};