import express from 'express';
import mongoose from 'mongoose';
import professionalRoutes from './routes/professionalRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import registerRoutes from './routes/registerRoutes';


const app = express();

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/larconectado', {});

app.use(cors());


// Middleware para permitir o parsing de JSON
app.use(express.json());

// Middleware para registrar logs de solicitação
app.use(morgan('dev'));

dotenv.config();

// Rotas
app.use('/api', professionalRoutes);
app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', registerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
