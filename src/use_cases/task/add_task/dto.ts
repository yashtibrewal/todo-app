import { AddTaskRequest } from "./request";

export interface AddTaskDto {

    description: string,
    completed?: boolean,

}


export class AddTaskDtoConverter {

    private data: AddTaskDto;

    constructor(data: AddTaskRequest) {
        // since the dto obj is same as request
        this.data = data;
    }

    getConvertedDto(): AddTaskDto {
        return this.data;
    }

}