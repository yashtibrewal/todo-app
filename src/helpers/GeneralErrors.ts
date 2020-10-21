import { Result } from "../interfaces/Result";
import { GeneralError } from "./GeneralError";

export class InvalidDataType extends Result<GeneralError> {
    constructor(field: string, expected_type: string) {
        super(false, {
            message: `Invalid Data Type Detected for the field ${field}, expected ${expected_type}`,
            name: "InvalidDataType"
        });
    }
}

export class InvalidValue extends Result<GeneralError> {
    constructor(field: string) {
        super(false, {
            message: `Invalid value found for the field ${field}`,
            name: "InvalidValue"
        });
    }
}

export class NotFound extends Result<GeneralError> {
    constructor(field: string) {
        super(false, {
            message: `The field ${field} was expected`,
            name: "NotFound"
        });
    }
}

export class UnexpectedError extends Result<GeneralError> {
    constructor(message: string) {
        super(false, {
            message,
            name: "UnexpectedError"
        });
    }
}