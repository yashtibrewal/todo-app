import {GetAllTaskRequestParamsRequest} from './request';
import {TaskValidator} from '../TaskValidator';

export class GetAllTaskParser {
    errors: Error[];

    constructor(data: GetAllTaskRequestParamsRequest) {
      const taskValidator = new TaskValidator();

      taskValidator.validate_number(data.skip, 'skip');
      taskValidator.validate_number(data.limit, 'limit');

      this.errors = taskValidator.errors;
    }
}
