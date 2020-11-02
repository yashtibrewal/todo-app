import {GetByIdParamsDto} from "../../../interfaces";
import {DeleteUserRequest} from "./request";


export type DeleteUserDto = GetByIdParamsDto

export class DeleteUserDtoConverter {
  private data: DeleteUserDto;

  constructor(data: DeleteUserRequest) {
  	this.data = {
  		_id: data.id,
  	};
  }

  getConvertedDto(): DeleteUserDto {
  	return this.data;
  }
}
