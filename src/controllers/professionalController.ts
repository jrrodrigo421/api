import { Request, Response } from 'express';
import ProfessionalModel, { Professional } from '../models/professional';


export const getProfessionals = async (req: Request, res: Response) => {
  console.log('buscando profissionais');
  
  
  try {
    const professionals = await ProfessionalModel.find();
    var teste = res.json(professionals);
  console.log('busca concluida');
  console.log('Profissionais: ', professionals);
    
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};


export const postProfessionals = async (req: Request, res: Response) => {
  console.log('criando um novo profissional');
  
  try {
    const { name, category, location, availability } = req.body;

    
    const professionalData: Professional = {
      name: req.body.name,
      category: req.body.category,
      location: req.body.location,
      availability: req.body.availability,
    } as Professional; 

    // Cria um novo documento Professional usando os dados fornecidos
    const newProfessional = new ProfessionalModel(professionalData);

    // Salva o novo profissional no banco de dados
    const savedProfessional = await newProfessional.save();

    res.status(201).json(savedProfessional);
  console.log('profissional criado com sucesso');
    
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};