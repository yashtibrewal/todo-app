import {Router} from "express";
import {
	addUserController, addUserValidator,
	getAllUsersController, getAllUserValidator,
	getUserController, getUserValidator,
} from "../use_cases";

const userRouter = Router();

userRouter.post("/",
	addUserValidator.handler(),
	addUserController.handler(),
);

userRouter.get("/",
	getAllUserValidator.handler(),
	getAllUsersController.handler(),
);

userRouter.get("/:id",
	getUserValidator.handler(),
	getUserController.handler(),
);

export {userRouter};
