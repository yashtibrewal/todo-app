import {UserValidator} from '../UserValidator';
import {GetAllUsersParamRequest} from './request';


export class GetAllUsersParser {
  errors: Error[];

  constructor(data: GetAllUsersParamRequest) {
    const userValidator = new UserValidator();

    userValidator.validateNumber(data.limit, 'limit');
    userValidator.validateNumber(data.skip, 'skip');

    this.errors = userValidator.errors;
  }
}
