import { Router } from 'express';
import AuthenticateUserController from './controllers/AuthenticateUserController';
import CreateUserController from './controllers/CreateUserController';

// eslint-disable-next-line import/prefer-default-export
export const router = Router();

router
  .post('/authenticate', AuthenticateUserController.handle)
  .post('/signup', CreateUserController.handle);
