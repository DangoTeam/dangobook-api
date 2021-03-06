import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { username, password, name } = request.body;

      const usernameWithNoSpaces = username.replace(/\s+/g, '').toLowerCase();

      const result = await CreateUserService.execute(
        usernameWithNoSpaces,
        password,
        name
      );

      return response.status(201).json(result);
    } catch (err) {
      return response
        .status(422)
        .json({ error: err.message, status: response.statusCode });
    }
  }
}

export default new CreateUserController();
