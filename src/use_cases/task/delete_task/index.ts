import {DeleteTaskValidator} from "./validator";
import {DeleteTaskController} from "./controller";

export const deleteTaskController = new DeleteTaskController();
export const deleteTaskValidator = new DeleteTaskValidator();
