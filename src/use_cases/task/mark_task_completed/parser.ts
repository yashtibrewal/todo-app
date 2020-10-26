import {TaskValidator} from '../TaskValidator';
import {MarkTaskCompletedRequestParam} from './request';


export class MarkTaskCompletedParser {
    errors: Error[];

    constructor(data: MarkTaskCompletedRequestParam) {
      const taskValidator = new TaskValidator();

      taskValidator.validate_id(data.id);

      this.errors = taskValidator.errors;
    }
}
