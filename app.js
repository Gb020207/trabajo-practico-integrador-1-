import express from 'express';
import {initDB} from './src/config/database.js';
import dotenv from 'dotenv';
dotenv.config();

const app= express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ ok: true }));




initDB();

app.listen(PORT, () => {
  console.log(`Se esta ecuchando la ruta ${PORT}`);});

