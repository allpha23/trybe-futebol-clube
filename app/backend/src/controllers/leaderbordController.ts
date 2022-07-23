import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

const createLeaderboard = async (req: Request, res: Response) => {
  const leaderBoard = await LeaderboardService();

  return res.status(200).json(leaderBoard);
};

export default createLeaderboard;
