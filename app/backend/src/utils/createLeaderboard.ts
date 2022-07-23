import { ILeadebord } from '../protocols/leaderbordProtocol';

const teamName = (obj: ILeadebord) => {
  const { name } = obj;
  return name;
};

const total = (obj: ILeadebord, index: number) => {
  let totalPoints = 0;
  obj.matches.forEach((m) => {
    if (m.homeTeam === index + 1 && m.homeTeamGoals > m.awayTeamGoals) totalPoints += 3;
    else if (m.awayTeam === index + 1 && m.awayTeamGoals > m.homeTeamGoals) totalPoints += 3;
    else if (m.awayTeam === index + 1 && m.awayTeamGoals === m.homeTeamGoals) totalPoints += 1;
  });

  return totalPoints;
};

const victories = (obj: ILeadebord, index: number) => {
  let win = 0;
  obj.matches.forEach((m) => {
    if (m.homeTeam === index + 1 && m.homeTeamGoals > m.awayTeamGoals) win += 1;
    if (m.awayTeam === index + 1 && m.awayTeamGoals > m.homeTeamGoals) win += 1;
  });

  return win;
};

const draw = (obj: ILeadebord, index: number) => {
  let totalDraws = 0;
  obj.matches.forEach((m) => {
    if (m.awayTeam === index + 1 && m.awayTeamGoals === m.homeTeamGoals) totalDraws += 1;
  });

  return totalDraws;
};

const losses = (obj: ILeadebord, index: number) => {
  let totalLosses = 0;
  obj.matches.forEach((m) => {
    if (m.homeTeam === index + 1 && m.homeTeamGoals < m.awayTeamGoals) totalLosses += 1;
    if (m.awayTeam === index + 1 && m.awayTeamGoals < m.homeTeamGoals) totalLosses += 1;
  });

  return totalLosses;
};

const goalsF = (obj: ILeadebord, index: number) => {
  let goalsFavor = 0;
  obj.matches.forEach((m) => {
    if (m.homeTeam === index + 1) goalsFavor += m.homeTeamGoals;
    if (m.awayTeam === index + 1) goalsFavor += m.awayTeamGoals;
  });

  return goalsFavor;
};

const goalsO = (obj: ILeadebord, index: number) => {
  let goalsOwn = 0;
  obj.matches.forEach((m) => {
    if (m.homeTeam === index + 1) goalsOwn += m.awayTeamGoals;
    if (m.awayTeam === index + 1) goalsOwn += m.homeTeamGoals;
  });

  return goalsOwn;
};

const goals = (obj: ILeadebord, index: number) => {
  let goalsBalance = 0;
  obj.matches.forEach((m) => {
    if (m.homeTeam === index + 1) goalsBalance += m.homeTeamGoals - m.awayTeamGoals;
    if (m.awayTeam === index + 1) goalsBalance += m.awayTeamGoals - m.homeTeamGoals;
  });

  return goalsBalance;
};

const rate = (p: number, g: number) => {
  const efficiency = (p / (g * 3)) * 100;

  return efficiency.toFixed(2);
};

const create = (teamMatcher: ILeadebord[]) => {
  const leaderboard = teamMatcher.map((obj, index) => {
    const name = teamName(obj);
    const totalPoints = total(obj, index);
    const totalGames = obj.matches.length;
    const totalVictories = victories(obj, index);
    const totalDraws = draw(obj, index);
    const totalLosses = losses(obj, index);
    const goalsFavor = goalsF(obj, index);
    const goalsBalance = goals(obj, index);
    const goalsOwn = goalsO(obj, index);
    const efficiency = rate(totalPoints, totalGames);

    const totalIndex = { totalPoints, totalGames, totalVictories, totalDraws, totalLosses };
    const goalsIndex = { goalsFavor, goalsOwn, goalsBalance };

    return { name, ...totalIndex, ...goalsIndex, efficiency };
  });

  return leaderboard;
};

export default create;
