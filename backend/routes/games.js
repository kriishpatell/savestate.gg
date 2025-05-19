import express from 'express';
import { fetchGames } from '../igdbClient.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const games = await fetchGames();
    res.json(games);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch games',
      details: error.message 
    });
  }
});

export default router;