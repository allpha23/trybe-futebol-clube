import { Router } from 'express';
import matcheController from '../controllers/matcheController';
import validateToken from '../middlewares/authorization';

const router = Router();

router.get('/', matcheController.matcheList);
router.post('/', validateToken, matcheController.createMatche);

export default router;
