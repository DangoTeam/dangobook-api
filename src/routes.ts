import { Router } from 'express';

import AuthenticateUserController from './controllers/User/AuthenticateUserController';
import ChangeUserInformationController from './controllers/User/ChangeUserInformationController';
import CreatePostController from './controllers/Post/CreatePostController';
import CreateUserController from './controllers/User/CreateUserController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

// eslint-disable-next-line import/prefer-default-export
export const router = Router();

router
  .post('/signin', AuthenticateUserController.handle)
  .post('/signup', CreateUserController.handle)
  .post('/settings/account', ensureAuthenticated, ChangeUserInformationController.handle)
  .post('/post', ensureAuthenticated, CreatePostController.handle);
