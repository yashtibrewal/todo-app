import { Router } from "express";
import { addTaskController, addTaskValidator } from "../use_cases";

const taskRouter = Router();

taskRouter.post(
    '/create',
    addTaskValidator.handler(),
    addTaskController.handler()
);

export { taskRouter };