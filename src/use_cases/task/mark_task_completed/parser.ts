import {TaskValidator} from "../TaskValidator";
import {MarkTaskCompletedRequestParam} from "./request";


export class MarkTaskCompletedParser {
  errors: Error[];

  constructor(data: MarkTaskCompletedRequestParam) {
  	const taskValidator = new TaskValidator();

  	taskValidator.validateId(data.id);

  	this.errors = taskValidator.errors;
  }
}
