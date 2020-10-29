import validator from 'validator';
import {BaseValidator} from '../../abstract';
import {GeneralErrors} from '../../helpers';


class UserValidator extends BaseValidator {
  constructor() {
    super();
  }

  /**
   * To validate the name field of the user document
   * @param value data to validate
   */
  validateName(value: unknown): void {
    const field = 'name';
    if (this.checkUndefined(value, field)) return;
    if (this.checkType(value, 'string', field)) return;
    if (!(validator.isLength(value as string, {min: 3, max: 20}))) {
      this.errors.push(new GeneralErrors.InvalidValue(field).errorValue());
      return;
    }
  }

  /**
   * To validate the email field of the user document
   * @param value data to validate
   */
  validateEmail(value: unknown): void {
    const field = 'email';
    if (this.checkUndefined(value, field)) return;
    if (this.checkType(value, 'string', field)) return;
    if (!(validator.isEmail(value as string))) {
      this.errors.push(new GeneralErrors.InvalidValue(field).errorValue());
      return;
    }
  }

  /**
   * To validate the password field of the user document
   * @param value data to validate
   */
  validatePassword(value: unknown): void {
    const field = 'password';
    if (this.checkUndefined(value, field)) return;
    if (this.checkType(value, 'string', field)) return;
    if (!(validator.isLength(value as string, {min: 7, max: 50}))) {
      this.errors.push(new GeneralErrors.InvalidValue(field).errorValue());
      return;
    }
  }
}

export {UserValidator};
