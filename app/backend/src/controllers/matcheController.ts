import { Request, Response } from 'express';
import { IGoals, IMatche } from '../protocols/matcheProtocols';
import matcheService from '../services/matcheService';

const matcheList = async (req: Request, res: Response) => {
  const matches = await matcheService.matcheList();

  return res.status(200).json(matches);
};

const createMatche = async (req: Request, res: Response) => {
  const data: IMatche = req.body;
  const create = await matcheService.createMatche(data);

  if (!create) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  return res.status(201).json(create);
};

const finishMatche = async (req: Request, res: Response) => {
  const { id } = req.params;
  const update = await matcheService.finishMatche(id);

  return res.status(200).json(update);
};

const updateMatche = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data: IGoals = req.body;
  const update = await matcheService.updateMatche(id, data);

  return res.status(200).json(update);
};

export default { matcheList, createMatche, finishMatche, updateMatche };
