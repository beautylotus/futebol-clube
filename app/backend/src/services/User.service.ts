import bcrypt = require('bcryptjs');
import UserModel from '../database/models/UserModel';
import { validateLoginFields } from './validations/validationInputValues';
import UserLogin from '../interfaces/UserInterface';

class UserService {
  public static async getByLogin(userInfo: UserLogin) {
    const { email, password } = userInfo;

    const error = validateLoginFields(userInfo);
    if (error.type) return error;

    const user = await UserModel.findOne({
      where: { email },
    });

    if (!user) return { type: 'badRequest', message: 'Email or password invalid' };

    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) return { type: 'badRequest', message: 'Email or password invalid' };

    return { type: null, message: user };
  }
}

export default UserService;
