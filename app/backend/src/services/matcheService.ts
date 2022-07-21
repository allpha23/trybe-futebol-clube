import { IGoals, IMatche } from '../protocols/matcheProtocols';
import Matches from '../database/models/MatcheModel';
import Teams from '../database/models/TeamModel';

const matcheList = async () => {
  const matches = await Matches.findAll({
    include: [
      { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
    ],
  });

  return matches;
};

const createMatche = async (data: IMatche) => {
  const { homeTeam, awayTeam } = data;

  const findTeamHome = await Teams.findByPk(homeTeam);
  const findTeamAway = await Teams.findByPk(awayTeam);

  if (!findTeamHome || !findTeamAway) return false;

  const create = await Matches.create({ ...data, inProgress: true });

  return create;
};

const finishMatche = async (id: string) => {
  await Matches.update({ inProgress: false }, {
    where: { id },
  });

  return { message: 'Finished' };
};

const updateMatche = async (id: string, data: IGoals) => {
  const { homeTeamGoals, awayTeamGoals } = data;
  await Matches.update({ homeTeamGoals, awayTeamGoals }, {
    where: { id },
  });

  return { message: 'Updated' };
};

export default { matcheList, createMatche, finishMatche, updateMatche };
