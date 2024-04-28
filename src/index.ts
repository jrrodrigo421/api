import express from 'express';
import mongoose from 'mongoose';
import professionalRoutes from './routes/professionalRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/larconectado', {});

app.use(cors());


// Middleware para permitir o parsing de JSON
app.use(express.json());


// Rotas
app.use('/api', professionalRoutes);
app.use('/api', userRoutes);
app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
