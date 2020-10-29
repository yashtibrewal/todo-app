/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {TaskValidator} from "../TaskValidator";


export class GetTaskParser {
  errors: Error[];

  constructor(data: any) {
  	const taskValidator = new TaskValidator();

  	taskValidator.validateId(data.id);

  	this.errors = taskValidator.errors;
  }
}
