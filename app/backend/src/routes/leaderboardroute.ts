import { Router } from 'express';
import leaderboardController from '../controllers/leaderbordController';

const router = Router();

router.get('/', leaderboardController);

export default router;
