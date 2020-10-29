import {TaskValidator} from '../TaskValidator';

export class AddTaskParser {
  errors: Error[];

  constructor(data: any) {
    const taskValidator = new TaskValidator();

    taskValidator.validateDescription(data.description);
    if (data.completed !== undefined) {
      taskValidator.validateCompleted(data.completed);
    }

    this.errors = taskValidator.errors;
  }
}
