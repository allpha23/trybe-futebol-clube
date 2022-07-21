import { Request, Response } from 'express';
import teamService from '../services/teamService';

const getTeams = async (req: Request, res: Response) => {
  const teams = await teamService.getTeams();

  return res.status(200).json({ teams });
};

const getTeamById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const team = await teamService.getTeamById(id);

  return res.status(200).json({ team });
};

export default { getTeams, getTeamById };
