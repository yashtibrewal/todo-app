/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {TaskValidator} from "../../task/TaskValidator";


export class GetUserParser {
  errors: Error[];

  constructor(data: any) {
  	const userValidator = new TaskValidator();

  	userValidator.validateId(data.id);

  	this.errors = userValidator.errors;
  }
}
