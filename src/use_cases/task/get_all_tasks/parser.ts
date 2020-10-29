import {GetAllTaskRequestParamsRequest} from './request';
import {TaskValidator} from '../TaskValidator';

export class GetAllTaskParser {
  errors: Error[];

  constructor(data: GetAllTaskRequestParamsRequest) {
    const taskValidator = new TaskValidator();

    taskValidator.validateNumber(data.skip, 'skip');
    taskValidator.validateNumber(data.limit, 'limit');

    this.errors = taskValidator.errors;
  }
}
