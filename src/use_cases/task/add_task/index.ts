import {AddTaskController} from './controller';
import {AddTaskValidator} from './validator';

const addTaskValidator = new AddTaskValidator();
const addTaskController = new AddTaskController();

export {addTaskController, addTaskValidator};
