import { sign } from 'jsonwebtoken'
import UserRepository from '../repositories/UserRepository'

class AuthenticateUserService {
  async execute(username: string, password: string, name?: string) {
    const user = await UserRepository.findByUsername(username)

    if (!user) throw new Error('unknown.user')

    if (user.password !== password) throw new Error('password.invalid')

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
    )

    return { token, user }
  }
}

export { AuthenticateUserService }
