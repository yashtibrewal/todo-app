import { BaseValidator } from "../../abstract";
import validator from "validator";
import { GeneralErrors } from "../../helpers"


class UserValidator extends BaseValidator {

    constructor() {
        super();
    }

    validate_name(value: unknown): void {
        let field = 'name';
        if (this.checkUndefined(value, field)) return;
        if (this.checkType(value, 'string', field)) return;
        if (!(validator.isLength(value as string, { min: 3, max: 20 }))) {
            this.errors.push(new GeneralErrors.InvalidValue(field));
            return;
        }

    }

    validate_email(value: unknown): void {

        let field = 'email';
        if (this.checkUndefined(value, field)) return;
        if (this.checkType(value, 'string', field)) return;
        if (!(validator.isEmail(value as string))) {
            this.errors.push(new GeneralErrors.InvalidValue(field));
            return;
        }

    }

    validate_password(value: unknown): void {

        let field = 'password';
        if (this.checkUndefined(value, field)) return;
        if (this.checkType(value, 'string', field)) return;
        if (!(validator.isLength(value as string, { min: 7, max: 50 }))) {
            this.errors.push(new GeneralErrors.InvalidValue(field));
            return;
        }
    }


}

export { UserValidator };