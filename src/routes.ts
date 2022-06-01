import { Router } from 'express';

import AuthenticateUserController from './controllers/User/AuthenticateUserController';
import ChangeUserInformationController from './controllers/User/ChangeUserInformationController';
import CreatePostController from './controllers/Post/CreatePostController';
import CreateUserController from './controllers/User/CreateUserController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

// eslint-disable-next-line import/prefer-default-export
export const router = Router();

router
  .post('/users/auth', AuthenticateUserController.handle)
  .post('/users', CreateUserController.handle)
  .patch('/settings/account', ensureAuthenticated, ChangeUserInformationController.handle)
  .post('/posts', ensureAuthenticated, CreatePostController.handle);
