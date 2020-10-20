import { TaskValidator } from "../../task/TaskValidator";


export class GetUserParser{

    errors: Error[];

    constructor(data: any) {

        const userValidator = new TaskValidator();

        userValidator.validate_id(data.id);

        this.errors = userValidator.errors;

    }

}