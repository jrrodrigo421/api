import { Request, Response } from 'express';
import ProfessionalModel, { Professional } from '../models/professional';


export const getProfessionals = async (req: Request, res: Response) => {
  console.log('buscando profissionais');
  
  const page = parseInt(req.query.page as string) || 1;
  const limit = 5;
  
  
  try {
    const totalProfessionals = await ProfessionalModel.countDocuments();
    const totalPages = Math.ceil(totalProfessionals / limit);
    const startIndex = (page - 1) * limit;
    
    const professionals = await ProfessionalModel.find().limit(limit).skip(startIndex);
    res.json({totalPages, currentPage: page, professionals});
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