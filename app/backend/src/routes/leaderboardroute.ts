import { Router } from 'express';
import leaderboardController from '../controllers/leaderbordController';

const router = Router();

router.get('/home', leaderboardController);

export default router;
