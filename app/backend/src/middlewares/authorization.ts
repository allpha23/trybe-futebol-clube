import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization as string;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const secret = process.env.JWT_SECRET as jwt.Secret;
    jwt.verify(token, secret);

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default validateToken;
