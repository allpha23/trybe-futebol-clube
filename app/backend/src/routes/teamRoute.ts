import { Router } from 'express';
import teamController from '../controllers/teamController';

const router = Router();

router.get('/', teamController.getTeams);
router.get('/:id', teamController.getTeamById);

export default router;
