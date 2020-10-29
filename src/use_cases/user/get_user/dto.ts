import {GetByIdParamsDto} from '../../../interfaces';
import {GetUserRequest} from './request';


export interface GetUserDto extends GetByIdParamsDto { }

export class GetUserDtoConverter {
  private data: GetUserDto;

  constructor(data: GetUserRequest) {
    this.data = {
      _id: data.id,
    };
  }

  getConvertedDto(): GetUserDto {
    return this.data;
  }
}
