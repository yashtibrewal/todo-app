import {GetAllTaskRequestParamsRequest} from "./request";
import {PaginationParamsDto} from "../../../interfaces";

export type GetAllTaskParamsDto = PaginationParamsDto


export class GetAllTaskParamsDtoConverter {
  private data: GetAllTaskParamsDto;

  constructor(data: GetAllTaskRequestParamsRequest) {
  	this.data = {
  		limit: parseInt(data.limit),
  		skip: parseInt(data.skip),
  	};
  }

  getConvertedDto():GetAllTaskParamsDto {
  	return this.data;
  }
}
