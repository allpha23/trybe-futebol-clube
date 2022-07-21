import * as bcrypt from 'bcryptjs';
import Users from '../database/models/UserModel';
import { ILogin } from '../protocols/LoginProtocol';
import jwtGenerator from '../utils/jwtGenerator';

const login = async (data:ILogin) => {
  const { email, password } = data;
  const [user] = await Users.findAll({ where: { email } });

  if (!user) return false;

  const validPassword = bcrypt.compareSync(password, user.password);

  if (!validPassword) return false;

  const token = jwtGenerator(user);

  return token;
};

export default login;
