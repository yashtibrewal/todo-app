import { Router } from "express"
import { addUserController } from '../use_cases/user/add_user';

const userRouter = Router();

userRouter.post('/create', addUserController.handler());

export { userRouter };