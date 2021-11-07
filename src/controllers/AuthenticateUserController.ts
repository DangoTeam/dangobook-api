import { Request, Response } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { userUsername, password } = request.body;

      const result = await AuthenticateUserService.execute(userUsername, password);

      const { token, user: { username, name } } = result;

      return response
        .status(201)
        .json({ token, user: { username, name } });
    } catch (err) {
      return response
        .status(422)
        .json({ error: err.message });
    }
  }
}

export default new AuthenticateUserController();
