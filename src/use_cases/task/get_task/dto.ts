import {ObjectId} from 'mongodb';
import {GetTaskRequest} from './request';

export interface GetTaskDto {
    _id: ObjectId;
}

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
