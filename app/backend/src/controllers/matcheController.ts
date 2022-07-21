import { Request, Response } from 'express';
import { IMatche } from '../protocols/LoginProtocol';
import matcheService from '../services/matcheService';

const matcheList = async (req: Request, res: Response) => {
  const matches = await matcheService.matcheList();

  return res.status(200).json(matches);
};

const createMatche = async (req: Request, res: Response) => {
  const data: IMatche = req.body;
  const create = await matcheService.createMatche(data);

  return res.status(200).json(create);
};

export default { matcheList, createMatche };
