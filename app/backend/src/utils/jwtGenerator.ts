import jwt = require('jsonwebtoken');
import * as dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig = {
  expiresIn: '15d',
};

export default (data = {}) => jwt.sign({ data }, SECRET, jwtConfig);
