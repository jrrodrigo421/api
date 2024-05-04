import express from 'express';
import { getProfessionals, postProfessionals } from '../controllers/professionalController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/professionals', authenticateToken , getProfessionals);

router.post('/create-professionals', authenticateToken ,postProfessionals)

export default router;
