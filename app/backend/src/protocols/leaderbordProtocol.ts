import Matches from '../database/models/MatcheModel';

export interface ILeadebord {
  name: string;
  matches: Matches[];
}
