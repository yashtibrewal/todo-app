import {GetByIdParamsDto} from '../../../interfaces';
import {MarkTaskCompletedRequestParam} from './request';

export interface MarkTaskCompletedDto extends GetByIdParamsDto { }

export class MarkTaskCompletedDtoConverter {
  private data: MarkTaskCompletedDto;

  constructor(data: MarkTaskCompletedRequestParam) {
    this.data = {
      _id: data.id,
    };
  }

  getConvertedDto(): MarkTaskCompletedDto {
    return this.data;
  }
}
