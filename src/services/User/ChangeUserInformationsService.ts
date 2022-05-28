import { genSalt, hash, compare } from 'bcrypt';
import { IUser } from '../../@types/interfaces/UserInterface';
import UserRepository from '../../repositories/UserRepository';

class ChangeUserInformationService {
  async execute(id: string, data: IUser) {
    const cryptedPassword = await hash(data.password, 10);

    // eslint-disable-next-line no-param-reassign
    data.password = cryptedPassword;

    const userUpdated = await UserRepository.update(id, data);

    return userUpdated;
  }
}

export default new ChangeUserInformationService();
