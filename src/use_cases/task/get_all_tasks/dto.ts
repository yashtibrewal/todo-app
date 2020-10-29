import {GetAllTaskRequestParamsRequest} from './request';
import {PaginationParamsDto} from '../../../interfaces';

export interface GetAllTaskParamsDto extends PaginationParamsDto { }


export class GetAllTaskParamsDtoConverter {
  private data: GetAllTaskParamsDto;

  constructor(data: GetAllTaskRequestParamsRequest) {
    this.data = {
      limit: parseInt(data.limit),
      skip: parseInt(data.skip),
    };
  }

  getConvertedDto() {
    return this.data;
  }
}
