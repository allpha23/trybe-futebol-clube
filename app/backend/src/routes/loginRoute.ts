import { Router } from 'express';
import loginController from '../controllers/loginController';
import validateLogin from '../middlewares/loginMiddleware';

const router = Router();

router.post('/', validateLogin, loginController.login);
router.get('/validate', loginController.loginValidate);

export default router;
