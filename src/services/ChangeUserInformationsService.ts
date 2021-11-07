import UserRepository from '../repositories/UserRepository';

interface IUser {
  username: string;
  name: string;
  password: string;
  bio: string;
}

class ChangeUserInformationService {
  async execute(userUsername, data?: IUser) {
    const user = await UserRepository.update(userUsername, data);

    return user;
  }
}

export default new ChangeUserInformationService();
