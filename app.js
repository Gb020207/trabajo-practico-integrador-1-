import express from 'express';
import {initDB} from './src/config/database.js';
import dotenv from 'dotenv';
import routerUser from './src/routes/user.routes.js';
import routeProfile from './src/routes/profile.routes.js';
import routerTag from './src/routes/tag.routes.js';
import routerArticle from './src/routes/article.routes.js';
dotenv.config();

const app= express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({ ok: true }));
app.use('/api', routerUser)
app.use('/api', routeProfile)
app.use('/api', routerTag)
app.use('/',routerArticle)

initDB();

app.listen(PORT, () => {
  console.log(`Se esta ecuchando la ruta ${PORT}`);});

