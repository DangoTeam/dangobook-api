import { Request, Response } from 'express';
import CreatePostService from '../../services/Post/CreatePostService';

class CreatePostController {
  async handle(request: Request, response: Response) {
    const { data } = request.body;

    const { userId } = request;

    data.userId = userId;

    const result = CreatePostService.execute(data);

    return response
      .status(201)
      .json(result);
  }
}

export default new CreatePostController();
