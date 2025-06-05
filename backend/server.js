// Module imports
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Set explicit path to .env files
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config imports
import config from './config/config.js';
import { connectDB } from './config/database.js';

// Router imports
import igdbRouter from './routes/igdbRouter.js';

dotenv.config({ path: path.join(__dirname, '.env') });
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/igdb', igdbRouter);

const PORT = config.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));