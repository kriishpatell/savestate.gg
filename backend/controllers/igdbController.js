import { searchGames, getGameDLC } from '../config/igdbClient.js';

export async function searchGamesHandler(req, res) {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: 'Missing search query' });
    }
    const data = await searchGames(query);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Failed to fetch games from IGDB' });
  }
}

export async function getGameDlcHandler(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'Missing game id' });
    }
    const data = await getGameDLC(id);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Failed to fetch DLC data from IGDB' });
  }
}
