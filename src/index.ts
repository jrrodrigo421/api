// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello from Lar Conectado backend!');
// });
// app.get('/teste', (req, res) => {
//   res.send('testando!');
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// src/index.ts
import express from 'express';
import mongoose from 'mongoose';
import professionalRoutes from './routes/professionalRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/larconectado', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// Middleware para permitir o parsing de JSON
app.use(express.json());

// Rotas
app.use('/api', professionalRoutes);
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
