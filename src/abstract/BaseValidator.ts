import { ObjectId } from "mongodb"
import validator from "validator";
import { GeneralError , GeneralErrors } from "../helpers";

class BaseValidator {
    errors: GeneralError[];
    constructor() {
        this.errors = [];
    }

    validate_number(value: any, field: string) {
        if(this.checkUndefined(value,field)) return;
        if(this.checkType(value,'string',field)) return;
        if(validator.isNumeric(value) == false){
            this.errors.push(new GeneralErrors.InvalidValue(field).errorValue());
        }
    }

    checkUndefined(value: any, field: string): boolean {
        if (value == undefined) {
            const error = new GeneralErrors.NotFound(field).errorValue();
            this.errors.push(error);
            return true;
        } else {
            return false;
        }
    }

    checkType(value: any, expected_type: string, field: string) {
        if (typeof value != expected_type) {
            this.errors.push(new GeneralErrors.InvalidDataType(field, expected_type).errorValue())
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
            this.errors.push(new GeneralErrors.InvalidValue(field).errorValue());
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