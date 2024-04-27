// src/routes/professionalRoutes.ts
import express from 'express';
import { getProfessionals, postProfessionals } from '../controllers/professionalController';

const router = express.Router();

router.get('/professionals', getProfessionals);

router.post('/create-profissionals', postProfessionals)
// Outras rotas conforme necessário

export default router;
