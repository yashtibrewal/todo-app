import { Router } from "express";
import { addTaskController, addTaskValidator, getAllTasksController, getTaskController, getTaskValidator } from "../use_cases";

const taskRouter = Router();

taskRouter.post(
    '/',
    addTaskValidator.handler(),
    addTaskController.handler()
);

taskRouter.get(
    '/',
    getAllTasksController.handler()
)

taskRouter.get(
    '/:id',
    getTaskValidator.handler(),
    getTaskController.handler()
)


export { taskRouter };