import {UpdateUserParamRequest, UpdateUserRequest} from "./request";
import {UserValidator} from "../UserValidator";

export class UpdateUserParser {
  errors: Error[];

  constructor(data: UpdateUserRequest) {
  	const userValidator = new UserValidator();

  	userValidator.validateName(data.name);
  	userValidator.validateEmail(data.email);
  	userValidator.validatePassword(data.password);

  	this.errors = userValidator.errors;
  }
}

export class UpdateUserParamParser {
	errors: Error[];
	
	constructor(data: UpdateUserParamRequest){

		const userValidator = new UserValidator();

		userValidator.validateId(data.id);

		this.errors = userValidator.errors;
	}

}