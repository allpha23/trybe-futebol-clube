export interface IGoals {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatche extends IGoals {
  homeTeam: number;
  awayTeam: number;
}
