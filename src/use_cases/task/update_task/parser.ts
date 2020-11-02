import {UpdateTaskParamRequest, UpdateTaskRequest} from "./request";
import {TaskValidator} from "../TaskValidator";

export class UpdateTaskParser {
  errors: Error[];

  constructor(data: UpdateTaskRequest) {
  	const taskValidator = new TaskValidator();

  	taskValidator.validateDescription(data.description);
  	taskValidator.validateCompleted(data.completed);

  	this.errors = taskValidator.errors;
  }
}

export class UpdateTaskParamParser {
	errors: Error[];
	
	constructor(data: UpdateTaskParamRequest){

		const taskValidator = new TaskValidator();

		taskValidator.validateId(data.id);

		this.errors = taskValidator.errors;
	}

}