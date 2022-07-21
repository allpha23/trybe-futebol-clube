import Teams from '../database/models/TeamModel';

const getTeams = async () => {
  const teams = await Teams.findAll();

  return teams;
};

const getTeamById = async (id: string) => {
  const team = await Teams.findByPk(id);

  return team;
};
export default { getTeams, getTeamById };
