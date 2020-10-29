import {AddUserRequest} from "./request";
import {UserValidator} from "../UserValidator";

class AddUserParser {
  errors: Error[];

  constructor(data: AddUserRequest) {
  	const userValidator = new UserValidator();

  	userValidator.validateName(data.name);
  	userValidator.validateEmail(data.email);
  	userValidator.validatePassword(data.password);

  	this.errors = userValidator.errors;
  }
}

export {AddUserParser};
