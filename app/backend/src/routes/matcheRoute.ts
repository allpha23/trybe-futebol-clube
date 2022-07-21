import { Router } from 'express';
import matcheController from '../controllers/matcheController';

const router = Router();

router.get('/', matcheController);

export default router;
