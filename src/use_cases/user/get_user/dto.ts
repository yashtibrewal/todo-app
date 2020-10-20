import { ObjectId } from "mongodb";
import { GetUserRequest } from "./request";


export interface GetUserDto {

    _id: ObjectId;

}

export class GetUserDtoConverter {

    private data: GetUserDto;

    constructor(data: GetUserRequest) {
        this.data = {
            _id: data.id
        }
    }

    getConvertedDto(): GetUserDto {
        return this.data;
    }

}