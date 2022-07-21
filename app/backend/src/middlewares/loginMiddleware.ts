import { NextFunction, Request, Response } from 'express';
import { ILogin } from '../protocols/LoginProtocol';

const message = 'All fields must be filled';

const validateEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body as ILogin;

  if (!email) {
    return res.status(400).json({ message });
  }

  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body as ILogin;

  if (!password) {
    return res.status(400).json({ message });
  }

  next();
};

export default [validateEmail, validatePassword];
