import { genSalt, hash } from 'bcrypt';

import UserRepository from '../repositories/UserRepository';

class CreateUserService {
  async execute(username: string, password: string, name?: string, bio?: string) {
    const userAlreadyExists = await UserRepository.findByUsername(username);

    if (userAlreadyExists) throw new Error('user.exists');

    const salt = await genSalt(10);

    const cryptedPassword = await hash(password, salt);

    const user = await UserRepository.create({
      name,
      password: cryptedPassword,
      username,
      bio
    });

    return user;
  }
}

export default new CreateUserService();
