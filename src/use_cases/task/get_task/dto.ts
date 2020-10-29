import {GetTaskRequest} from './request';
import {GetByIdParamsDto} from '../../../interfaces';

export interface GetTaskDto extends GetByIdParamsDto { }

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
