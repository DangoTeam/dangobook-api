import { genSalt, hash } from 'bcrypt';
import { IUser } from '../../@types/interfaces/UserInterface';
import UserRepository from '../../repositories/UserRepository';

class CreateUserService {
  // async execute(username: string, password: string, name?: string, bio?: string) {
  async execute(rawUser: IUser) {
    const userAlreadyExists = await UserRepository.findByUsername(rawUser.username);

    if (userAlreadyExists) throw new Error('user.exists');

    const salt = await genSalt(10);

    const cryptedPassword = await hash(rawUser.password, salt);

    const user = await UserRepository.create({
      ...rawUser,
      password: cryptedPassword
    });

    return user;
  }
}

export default new CreateUserService();
