import { Router } from "express"
import { addUserController, addUserValidator } from '../use_cases';

const userRouter = Router();

userRouter.post('/create',
    addUserValidator.handler(),
    addUserController.handler()
);

export { userRouter };