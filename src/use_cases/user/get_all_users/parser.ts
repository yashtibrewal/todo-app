import {UserValidator} from '../UserValidator';
import {GetAllUsersParamRequest} from './request';


export class GetAllUsersParser {
    errors: Error[];

    constructor(data: GetAllUsersParamRequest) {
      const userValidator = new UserValidator();

      userValidator.validate_number(data.limit, 'limit');
      userValidator.validate_number(data.skip, 'skip');

      this.errors = userValidator.errors;
    }
}
