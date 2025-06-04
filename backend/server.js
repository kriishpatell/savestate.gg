import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import config from './config/config.js';
import { connectDB } from './config/database.js';

import igdbRouter from './routes/igdbRouter.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/igdb', igdbRouter);

const PORT = config.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));