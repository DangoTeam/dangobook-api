import { Request, Response } from 'express';
import ChangeUserInformationsService from '../services/ChangeUserInformationsService';

class ChangeUserInformationController {
  async handle(request: Request, response: Response) {
    const { data } = request.body;

    const { userId } = request;

    const result = await ChangeUserInformationsService.execute(userId, data);

    const {
      id, username, name, bio
    } = result;

    return response
      .status(201)
      .json({
        id, username, name, bio
      });
  }
}

export default new ChangeUserInformationController();
