import { Request, Response } from 'express';
import matcheService from '../services/matcheService';

const matcheList = async (req: Request, res: Response) => {
  const matches = await matcheService();

  return res.status(200).json(matches);
};

export default matcheList;
