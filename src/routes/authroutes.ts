import express from 'express';
import { loginAuth } from '../controllers/authController';

const router = express.Router();

router.post('/login', loginAuth);

export default router;