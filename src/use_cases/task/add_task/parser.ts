import {TaskValidator} from '../TaskValidator';

export class AddTaskParser {
    errors: Error[];

    constructor(data: any) {
      const taskValidator = new TaskValidator();

      taskValidator.validate_description(data.description);
      taskValidator.validate_completed(data.completed);

      this.errors = taskValidator.errors;
    }
}
