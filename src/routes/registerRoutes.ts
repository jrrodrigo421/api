import express from 'express';
import { postNewRegister } from '../controllers/registerController';

const router = express.Router();

router.post('/register', postNewRegister);

export default router;
