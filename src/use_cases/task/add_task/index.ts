import { AddTaskController } from "./AddTask.controller";
import { AddTaskValidator } from "./AddTask.validator";

const addTaskValidator = new AddTaskValidator();
const addTaskController = new AddTaskController();

export { addTaskController, addTaskValidator };