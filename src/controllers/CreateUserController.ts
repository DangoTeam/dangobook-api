import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { userUsername, password, name } = request.body;

      if (!userUsername || !password) throw new Error('missing.information');

      const usernameWithNoSpaces = userUsername.replace(/\s+/g, '').toLowerCase();

      await CreateUserService.execute(
        usernameWithNoSpaces,
        password,
        name
      );

      return response
        .status(201)
        .json({ userUsername, name });
    } catch (err) {
      return response
        .status(422)
        .json({ error: err.message });
    }
  }
}

export default new CreateUserController();
