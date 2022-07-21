import { NextFunction, Request, Response } from 'express';

const message = 'It is not possible to create a match with two equal teams';

const mirrorMatche = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    return res.status(401).json({ message });
  }

  next();
};

export default mirrorMatche;
