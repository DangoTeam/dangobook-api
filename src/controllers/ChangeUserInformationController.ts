import { Request, Response } from 'express';
import ChangeUserInformationsService from '../services/ChangeUserInformationsService';

class ChangeUserInformationController {
  async handle(request: Request, response: Response) {
    const { data } = request.body;

    const { userUsername } = request;

    const result = await ChangeUserInformationsService.execute(userUsername, data);

    return response.json(result);
  }
}

export default new ChangeUserInformationController();
