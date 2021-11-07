import { Router } from 'express';

import AuthenticateUserController from './controllers/AuthenticateUserController';
import ChangeUserInformationController from './controllers/ChangeUserInformationController';
import CreatePostController from './controllers/CreatePostController';
import CreateUserController from './controllers/CreateUserController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

// eslint-disable-next-line import/prefer-default-export
export const router = Router();

router
  .post('/signin', AuthenticateUserController.handle)
  .post('/signup', CreateUserController.handle)
  .post('/create_post', ensureAuthenticated, CreatePostController.handle)
  .post('/settings/account', ensureAuthenticated, ChangeUserInformationController.handle);
