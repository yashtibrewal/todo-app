import {TaskValidator} from '../TaskValidator';


export class GetTaskParser {
    errors: Error[];

    constructor(data: any) {
      const taskValidator = new TaskValidator();

      taskValidator.validate_id(data.id);

      this.errors = taskValidator.errors;
    }
}
