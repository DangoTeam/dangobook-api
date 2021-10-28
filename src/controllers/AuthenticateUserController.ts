import { Request, Response } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { username, password } = request.body;

      const result = await AuthenticateUserService.execute(username, password);

      return response.json(result);
    } catch (err) {
      return response
        .status(422)
        .json({ error: err.message, status: response.statusCode });
    }
  }
}

export default new AuthenticateUserController();
