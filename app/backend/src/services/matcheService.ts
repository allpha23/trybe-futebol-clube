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

export default matcheList;
