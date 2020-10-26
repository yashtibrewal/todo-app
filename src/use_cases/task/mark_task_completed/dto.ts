import {ObjectId} from 'mongodb';
import {MarkTaskCompletedRequestParam} from './request';

export interface MarkTaskCompletedDto {
    _id: ObjectId;
}

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
