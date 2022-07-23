import { Op } from 'sequelize';
import Teams from '../database/models/TeamModel';
import Matches from '../database/models/MatcheModel';
import create from '../utils/createLeaderboard';

const createLeaderboard = async () => {
  const teams = await Teams.findAll();
  const teamMatcher = await Promise.all(teams.map(async (team) => {
    const matches = await Matches.findAll({ where: {
      [Op.or]: [{ homeTeam: team.id }, { awayTeam: team.id }],
      [Op.and]: { inProgress: false } } });
    return { name: team.teamName, matches };
  }));

  const leaderboard = create(teamMatcher);

  return leaderboard;
};

export default createLeaderboard;
