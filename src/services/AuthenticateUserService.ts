import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcrypt';
import UserRepository from '../repositories/UserRepository';

class AuthenticateUserService {
  async execute(username: string, password: string) {
    const user = await UserRepository.findByUsername(username);

    if (!user) throw new Error('unknown.user');

    const userPasswordIsCorrect = compareSync(password, user.password);

    if (!userPasswordIsCorrect) throw new Error('password.invalid');

    const token = sign(
      {
        user: {
          name: user.name,
          id: user.id
        }
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '7d'
      }
    );

    return { token, user };
  }
}

export default new AuthenticateUserService();
