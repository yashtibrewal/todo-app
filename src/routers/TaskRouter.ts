import { Router } from "express";
import { addTaskController } from "../use_cases";

const taskRouter = Router();

taskRouter.post('/create', addTaskController.handler());

export { taskRouter };