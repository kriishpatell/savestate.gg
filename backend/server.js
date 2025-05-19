import express from 'express';
import cors from 'cors';
import config from './config/config.js';
import connectDB from './config/database.js';
import gamesRouter from './routes/games.js';

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/games', gamesRouter);

const PORT = config.port || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})