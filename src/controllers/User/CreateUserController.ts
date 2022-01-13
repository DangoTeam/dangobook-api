import { Request, Response, RequestHandler } from 'express';
import CreateUserService from '../../services/User/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { username, password, name } = request.body;

      if (!username || !password) throw new Error('missing.information');

      const usernameWithNoSpaces = username.replace(/\s+/g, '').toLowerCase();

      await CreateUserService.execute({
        ...request.body,
        username: usernameWithNoSpaces
      });

      return response
        .status(201)
        .json({ username, name });
    } catch (err) {
      return response
        .status(422)
        .json({ error: err.message });
    }
  }
}

export default new CreateUserController();
