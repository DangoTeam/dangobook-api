/* eslint-disable no-param-reassign */
import { hash } from 'bcrypt';
import { IUser } from '../../@types/interfaces/UserInterface';
import UserRepository from '../../repositories/UserRepository';

class ChangeUserInformationService {
  async execute(id: string, data: IUser) {
    if (data.password) {
      data.password = await hash(data.password, 10);
    }

    const userUpdated = await UserRepository.update(id, data);

    return userUpdated;
  }
}

export default new ChangeUserInformationService();
