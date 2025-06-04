import { Router } from 'express';
import { searchGamesHandler } from '../controllers/igdbController.js';

const router = Router();

router.get('/search', searchGamesHandler);

export default router;