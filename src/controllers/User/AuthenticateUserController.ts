import { Request, Response } from 'express';
import AuthenticateUserService from '../../services/User/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { username, password } = request.body;

      const result = await AuthenticateUserService.execute(username, password);

      const { token, user: { username: userUsername, name, id } } = result;

      return response
        .status(201)
        .json({ token, user: { id, userUsername, name } });
    } catch (err) {
      return response
        .status(422)
        .json({ error: err.message });
    }
  }
}

export default new AuthenticateUserController();
