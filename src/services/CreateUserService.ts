import UserRepository from '../repositories/UserRepository';

class CreateUserService {
  async execute(username: string, password: string, name?: string) {
    const userAlreadyExists = await UserRepository.findByUsername(username);

    if (userAlreadyExists) throw new Error('username.exists');

    const user = await UserRepository.create({
      name,
      password,
      username
    });

    return user;
  }
}

export default new CreateUserService();
