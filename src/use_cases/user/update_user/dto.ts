import { ObjectId } from "mongodb";
import { GetByIdParamsDto } from "../../../interfaces";
import {UpdateUserParamRequest, UpdateUserRequest} from "./request";

export interface UpdateUserDto {
  /**
   * represents the name field on the user document
   */
  name: string,
  /**
   * represents the email field on the user document
   */
  email: string,
  /*
   * represents the password field on the user document
   */
  password: string,

}

export type UpdateUserParamDto = GetByIdParamsDto;

export class UpdateUserDtoConverter {
  private data: UpdateUserDto;

  constructor(data: UpdateUserRequest) {
  	// since the dto obj is same as request obj
  	this.data = data;
  }

  getConvertedObject(): UpdateUserDto {
  	return this.data;
  }
}

export class UpdateUserParamsDtoConverter {
  private data: UpdateUserParamDto;

  constructor(data: UpdateUserParamRequest) {
  	// since the dto obj is same as request obj
  	this.data = {
  		_id: new ObjectId(data.id)
  	};
  }

  getConvertedObject(): UpdateUserParamDto {
  	return this.data;
  }
}

