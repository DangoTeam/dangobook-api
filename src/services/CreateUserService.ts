import { genSaltSync, hashSync, compareSync } from 'bcrypt';

import UserRepository from '../repositories/UserRepository';

class CreateUserService {
  async execute(username: string, password: string, name?: string) {
    const userAlreadyExists = await UserRepository.findByUsername(username);

    if (userAlreadyExists) throw new Error('username.exists');

    const salt = genSaltSync(10);

    const criptedPassword = hashSync(password, salt);

    const user = await UserRepository.create({
      name,
      password: criptedPassword,
      username
    });

    return user;
  }
}

export default new CreateUserService();
