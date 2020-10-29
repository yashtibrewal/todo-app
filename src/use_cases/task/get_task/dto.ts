import {GetTaskRequest} from "./request";
import {GetByIdParamsDto} from "../../../interfaces";

export type GetTaskDto = GetByIdParamsDto

export class GetTaskDtoConverter {
  private data: GetTaskDto;

  constructor(data: GetTaskRequest) {
  	this.data = {
  		_id: data.id,
  	};
  }

  getConvertedDto(): GetTaskDto {
  	return this.data;
  }
}
