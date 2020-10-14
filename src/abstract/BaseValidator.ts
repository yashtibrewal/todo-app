import { GeneralErrors } from "../helpers";

class BaseValidator {
    errors: Error[];
    constructor() {
        this.errors = [];
    }
    checkUndefined(value: any, field: string): boolean {
        if (value == undefined) {
            this.errors.push(new GeneralErrors.NotFound(field));
            return true;
        } else {
            return false;
        }
    }

    checkType(value: any, expected_type: string, field: string) {
        if (typeof value != expected_type) {
            this.errors.push(new GeneralErrors.InvalidDataType(field, expected_type))
            return true;
        } else {
            return false;
        }
    }

}

export {
    BaseValidator
};