import {AddUserRequest} from './request';
import {UserValidator} from '../UserValidator';

class AddUserParser {
    errors: Error[];

    constructor(data: AddUserRequest) {
      const userValidator = new UserValidator();

      userValidator.validate_name(data.name);
      userValidator.validate_email(data.email);
      userValidator.validate_password(data.password);

      this.errors = userValidator.errors;
    }
}

export {AddUserParser};
