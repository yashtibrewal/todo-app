import {GetAllUsersParamRequest} from "./request";
import {PaginationParamsDto} from "../../../interfaces";

export type GetAllUsersParamsDto = PaginationParamsDto


export class GetAllUsersParamsDtoConverter {
  data: GetAllUsersParamsDto;

  constructor(data: GetAllUsersParamRequest) {
  	this.data = {
  		limit: parseInt(data.limit),
  		skip: parseInt(data.skip),
  	};
  }

  getConvertedDto(): GetAllUsersParamsDto {
  	return this.data;
  }
}
