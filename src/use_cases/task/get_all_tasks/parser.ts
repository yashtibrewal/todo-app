import { GetAllTaskRequestParams } from "./request";
import { TaskValidator } from "../TaskValidator";
import { GetAllTaskParamsDto } from "./dto";

export class GetAllTaskParser {

    errors: Error[];

    constructor(data: GetAllTaskRequestParams) {

        const taskValidator = new TaskValidator();

        taskValidator.validate_number(data.skip, 'skip');
        taskValidator.validate_number(data.limit, 'limit');

        this.errors = taskValidator.errors;
    }

    convert(data: GetAllTaskRequestParams): GetAllTaskParamsDto {

        let converted_object: GetAllTaskParamsDto = {
            limit: data.limit,
            skip: data.skip
        };

        return converted_object;
    }

}
