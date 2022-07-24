import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

const createLeaderboard = async (req: Request, res: Response) => {
  const leaderBoard = await LeaderboardService.createLeaderboard();

  return res.status(200).json(leaderBoard);
};

const filterLeaderboardHome = async (req: Request, res: Response) => {
  const leaderBoardHome = await LeaderboardService.filterLeaderboardHome();

  return res.status(200).json(leaderBoardHome);
};

export default { createLeaderboard, filterLeaderboardHome };
