import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

const service = new CreateUserService();

class CreateUserController {
  
  async handle(request: Request, response: Response) {
    
    const { username, password, name } = request.body;

    const usernameWithNoSpaces = username.replace(/\s+/g, '').toLowerCase();

    try {
      const result = await service.execute(usernameWithNoSpaces, password, name);

      return response
      .status(201)
      .json(result);

    } catch (err) {
      return response
      .status(422)
      .json({ errorCode: err.message });
    }
  }
}

export { CreateUserController }