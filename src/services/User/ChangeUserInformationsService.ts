import { genSalt, hash } from 'bcrypt';
import { IUser } from '../../@types/interfaces/UserInterface';
import UserRepository from '../../repositories/UserRepository';

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

    return userUpdated;
  }
}

export default new ChangeUserInformationService();
