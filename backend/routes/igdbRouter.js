import { Router } from 'express';
import { searchGamesHandler, getGameDlcHandler } from '../controllers/igdbController.js';

const router = Router();

router.get('/search', searchGamesHandler);
router.get('/games/:id/dlc', getGameDlcHandler);

export default router;