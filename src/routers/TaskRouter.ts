import {Router} from 'express';
import {
  addTaskController, addTaskValidator,
  getAllTasksValidator, getAllTasksController,
  getTaskController, getTaskValidator,
  markTaskCompletedValidator, markTaskCompletedController,
} from '../use_cases';

const taskRouter = Router();

taskRouter.post(
    '/',
    addTaskValidator.handler(),
    addTaskController.handler(),
);

taskRouter.get(
    '/',
    getAllTasksValidator.handler(),
    getAllTasksController.handler(),
);

taskRouter.get(
    '/:id',
    getTaskValidator.handler(),
    getTaskController.handler(),
);

taskRouter.patch(
    '/:id/markComplete',
    markTaskCompletedValidator.handler(),
    markTaskCompletedController.handler(),
);

export {taskRouter};
