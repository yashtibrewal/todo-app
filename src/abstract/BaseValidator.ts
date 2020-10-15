import { ObjectId } from "mongodb"
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

    checkObjectId(value: string, field: string) {
        try {
            new ObjectId(value);
            return false;
        } catch (err) {
            this.errors.push(new GeneralErrors.InvalidValue(field));
            return true;
        }
    }

    validate_id(value: any): void {

        let field = 'id';
        if (this.checkUndefined(value, field)) return;
        if (this.checkType(value, 'string', field)) return;
        if (this.checkObjectId(value, field)) return;
    }

}

export {
    BaseValidator
};