import {AddTaskRequest} from "./request";

export interface AddTaskDto {

  /**
   * task description
   */
  description: string,

  /**
   * denotes if the task is completed
   */
  completed?: boolean,

}


export class AddTaskDtoConverter {
  private data: AddTaskDto;

  constructor(data: AddTaskRequest) {
  	// since the dto obj is same as request
  	this.data = data;
  }

  getConvertedDto(): AddTaskDto {
  	return this.data;
  }
}
