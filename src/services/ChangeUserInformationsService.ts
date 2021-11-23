import { genSalt, hash } from 'bcrypt';
import UserRepository from '../repositories/UserRepository';

interface IUser {
  username: string;
  name: string;
  password: string;
  bio: string;
}

class ChangeUserInformationService {
  async execute(id: string, data?: IUser) {
    const user = await UserRepository.findById(id);

    if (data.password !== user.password) {
      const salt = await genSalt(10);

      const cryptedPassword = await hash(data.password, salt);

      // eslint-disable-next-line no-param-reassign
      data.password = cryptedPassword;
    }

    const userUpdated = await UserRepository.update(id, data);

    return user;
  }
}

export default new ChangeUserInformationService();
