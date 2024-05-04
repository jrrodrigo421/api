import express from 'express';
import { loginAuth } from '../controllers/authController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/login',  loginAuth);

export default router;