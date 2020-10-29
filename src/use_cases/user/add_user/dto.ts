import {AddUserRequest} from "./request";

export interface AddUserDto {
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

export class AddUserDtoConverter {
  private data: AddUserDto;

  constructor(data: AddUserRequest) {
  	// since the dto obj is same as request obj
  	this.data = data;
  }

  getConvertedObject(): AddUserDto {
  	return this.data;
  }
}
