import {DeleteTaskRequest} from "./request";
import {GetByIdParamsDto} from "../../../interfaces";

export type DeleteTaskDto = GetByIdParamsDto

export class DeleteTaskDtoConverter {
  private data: DeleteTaskDto;

  constructor(data: DeleteTaskRequest) {
  	this.data = {
  		_id: data.id,
  	};
  }

  getConvertedDto(): DeleteTaskDto {
  	return this.data;
  }
}
