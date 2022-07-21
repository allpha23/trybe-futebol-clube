import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import loginService from '../services/loginService';
import { ILogin } from '../protocols/LoginProtocol';

dotenv.config();

const login = async (req: Request, res: Response) => {
  const data: ILogin = req.body;

  const token = await loginService(data);

  if (!token) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  req.headers.authorization = token;

  return res.status(200).json({ token });
};

const loginValidate = async (req: Request, res: Response) => {
  const token = req.headers.authorization as string;
  const secret = process.env.JWT_SECRET as jwt.Secret;
  const decoded = jwt.verify(token, secret);
  const { data } = decoded as jwt.JwtPayload;
  const { role } = data;

  return res.status(200).json({ role });
};

export default { login, loginValidate };
