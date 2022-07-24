import Matches from '../database/models/MatcheModel';

export interface ILeadebord {
  name: string;
  matches: Matches[];
}

export interface ITeamleaderbord {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
}
