import { GetAllTaskRequestParamsRequest } from "./request";

export interface GetAllTaskParamsDto {

    skip: number,
    limit: number

}


export class GetAllTaskParamsDtoConverter {

    private data: GetAllTaskParamsDto;

    constructor(data: GetAllTaskRequestParamsRequest) {
        this.data = {
            limit: parseInt(data.limit),
            skip: parseInt(data.skip)
        }
    }

    getConvertedDto(){
        return this.data;
    }

}