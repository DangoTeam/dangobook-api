import { Request, Response } from 'express';
import CreatePostService from '../services/CreatePostService';

class CreatePostController {
  async handle(request: Request, response: Response) {
    const { content } = request.body;

    const { userUsername } = request;

    const result = await CreatePostService.execute(content, userUsername);

    return response.json(result);
  }
}

export default new CreatePostController();
