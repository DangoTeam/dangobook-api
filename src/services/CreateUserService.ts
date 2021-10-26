import { sign } from "jsonwebtoken";
import prismaClient from "../prisma"
import UserRepository from "../repositories/UserRepository";

class CreateUserService {
  async execute(username: string, password: string, name?: string) {

    let user = await UserRepository.findByUsername(username);

    if (user) throw new Error('username.exists');

    user = await UserRepository.create({
      name,
      password,
      username
    })

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

export { CreateUserService }