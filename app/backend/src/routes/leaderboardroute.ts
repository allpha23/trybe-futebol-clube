import { Router } from 'express';
import leaderboardController from '../controllers/leaderbordController';

const router = Router();

router.get('/', leaderboardController.createLeaderboard);
router.get('/home', leaderboardController.filterLeaderboardHome);

export default router;
