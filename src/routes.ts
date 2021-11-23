import { Router } from 'express';

import AuthenticateUserController from './controllers/AuthenticateUserController';
import ChangeUserInformationController from './controllers/ChangeUserInformationController';
import CreateUserController from './controllers/CreateUserController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

// eslint-disable-next-line import/prefer-default-export
export const router = Router();

router
  .post('/signin', AuthenticateUserController.handle)
  .post('/signup', CreateUserController.handle)
  .post('/settings/account', ensureAuthenticated, ChangeUserInformationController.handle);
