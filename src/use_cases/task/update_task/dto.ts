import { ObjectId } from "mongodb";
import { GetByIdParamsDto } from "../../../interfaces";
import {UpdateTaskParamRequest, UpdateTaskRequest} from "./request";

export interface UpdateTaskDto {

  description: string;
  completed: boolean;

}

export type UpdateTaskParamDto = GetByIdParamsDto;

export class UpdateTaskDtoConverter {
  private data: UpdateTaskDto;

  constructor(data: UpdateTaskRequest) {
  	// since the dto obj is same as request obj
  	this.data = data;
  }

  getConvertedObject(): UpdateTaskDto {
  	return this.data;
  }
}

export class UpdateTaskParamsDtoConverter {
  private data: UpdateTaskParamDto;

  constructor(data: UpdateTaskParamRequest) {
  	// since the dto obj is same as request obj
  	this.data = {
  		_id: new ObjectId(data.id)
  	};
  }

  getConvertedObject(): UpdateTaskParamDto {
  	return this.data;
  }
}

