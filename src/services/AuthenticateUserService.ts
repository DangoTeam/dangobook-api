import prismaClient from "../prisma";
import { sign } from 'jsonwebtoken';

class AuthenticateUserService {
  async execute(username: string, password: string, name?: string) {
    let user = await prismaClient.user.findFirst({
      where: {
        username
      }
    });

    if (!user) throw new Error('unknown.user');
    
    if (user.password !== password) throw new Error('password.invalid');

    const token = sign({
      user: {
        name: user.name,
        id: user.id
      }
    },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '7d'
      });

    return { token, user }

  }
}

export { AuthenticateUserService }