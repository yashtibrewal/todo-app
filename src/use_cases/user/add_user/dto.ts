import { AddUserRequest } from "./request";

export interface AddUserDto {

    name: string,
    email: string,
    password: string,

}

export class AddUserDtoConverter {

    private data: AddUserDto;

    constructor(data: AddUserRequest) {
        // since the dto obj is same as request obj
        this.data = data
    }

    getConvertedObject(): AddUserDto {
        return this.data;
    }

}