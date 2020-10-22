import { Result } from "../../interfaces/Result";
import { UseCaseError } from "../../helpers";


export class TaskAlreadyExists extends Result<UseCaseError>{
    constructor() {
        super(false, {
            message: "The task already exists",
            name: "TaskAlreadyExists"
        });
    }
}

export class TaskNotFound extends Result<UseCaseError> {
    constructor() {
        super(false, {
            message: `Task not found`,
            name: "TaskNotFound"
        });
    }
}
