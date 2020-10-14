import { AddTaskRequest } from "./AddTask.request";
import { TaskValidator } from "../TaskValidator";

class AddTaskParser {

    errors: Error[];

    constructor(data: any) {

        const taskValidator = new TaskValidator();

        taskValidator.validate_description(data.description);
        taskValidator.validate_completed(data.completed);

        this.errors = taskValidator.errors;
    }

    convert(data: any): AddTaskRequest {

        let converted_object: any = {};

        converted_object.description = data.description;
        if (data.completed) {
            converted_object.completed = data.completed.toLowerCase() == 'true' ? true : false;
        }

        return converted_object;
    }

}

export { AddTaskParser };