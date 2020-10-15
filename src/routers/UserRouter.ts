import { Router } from "express"
import { addUserController, addUserValidator, getAllUsersController } from '../use_cases';
import { getUserController, getUserValidator } from "../use_cases/user/get_user";

const userRouter = Router();

userRouter.post('/',
    addUserValidator.handler(),
    addUserController.handler()
);

userRouter.get('/',
    getAllUsersController.handler()
)

userRouter.get('/:id',
    getUserValidator.handler(),
    getUserController.handler()
)

export { userRouter };