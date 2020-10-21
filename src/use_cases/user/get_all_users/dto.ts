import { GetAllUsersParamRequest } from "./request";

export interface GetAllUsersParamsDto {

    skip: number,
    limit: number

}


export class GetAllUsersParamsDtoConverter {

    data: GetAllUsersParamsDto;

    constructor(data: GetAllUsersParamRequest) {

        this.data = {
            limit: parseInt(data.limit),
            skip: parseInt(data.skip)
        }

    }

    getConvertedDto(): GetAllUsersParamsDto {
        return this.data;
    }

}