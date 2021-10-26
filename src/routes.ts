import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post('/signup', new CreateUserController().handle);

export { router }

