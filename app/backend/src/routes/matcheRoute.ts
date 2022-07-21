import { Router } from 'express';
import matcheController from '../controllers/matcheController';
import validateToken from '../middlewares/authorization';
import validateMatche from '../middlewares/matcheMiddleware';

const router = Router();

router.get('/', matcheController.matcheList);
router.post('/', validateToken, validateMatche, matcheController.createMatche);
router.patch('/:id/finish', matcheController.finishMatche);

export default router;
