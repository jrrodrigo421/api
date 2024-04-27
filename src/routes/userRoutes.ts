// src/routes/userRoutes.ts
import express from 'express';
import { getUsers } from '../controllers/userController';

const router = express.Router();

router.get('/users', getUsers);
// Outras rotas conforme necessário

export default router;
