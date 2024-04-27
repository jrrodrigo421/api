import express from 'express';
import { getProfessionals, postProfessionals } from '../controllers/professionalController';

const router = express.Router();

router.get('/professionals', getProfessionals);

router.post('/create-professionals', postProfessionals)

export default router;
