import {GetTaskRequest} from "./request";
import {TaskValidator} from "../TaskValidator";


export class GetTaskParser{

    errors: Error[];

    constructor(data: any) {

        const taskValidator = new TaskValidator();

        taskValidator.validate_id(data.id);

        this.errors = taskValidator.errors;
    }

    convert(data: any): GetTaskRequest {

        let converted_object: any = {};

        converted_object.id = data.id;

        return converted_object;
    }

}
