/**
 * @author Yash Tibrewal
 */

import {ObjectId} from 'mongodb';
import validator from 'validator';
import {GeneralError, GeneralErrors} from '../helpers';

class BaseValidator {
  errors: GeneralError[];
  constructor() {
    this.errors = [];
  }

  /**
   *
   * @param value input value to validate
   * @param field name of the object field for error message construction
   */
  validateNumber(value: any, field: string) {
    if (this.checkUndefined(value, field)) return;
    if (this.checkType(value, 'string', field)) return;
    if (validator.isNumeric(value) == false) {
      this.errors.push(new GeneralErrors.InvalidValue(field).errorValue());
    }
  }

  /**
   *
   * @param value input value to validate
   * @param field name of the object field for error message construction
   */
  checkUndefined(value: any, field: string): boolean {
    if (value == undefined) {
      const error = new GeneralErrors.NotFound(field).errorValue();
      this.errors.push(error);
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @param value input value to validate
   * @param field name of the object field for error message construction
   * @param expected_type the expected type of the value param e.g. string, number
   */
  checkType(value: any, expected_type: string, field: string) {
    if (typeof value != expected_type) {
      this.errors.push(new GeneralErrors.InvalidDataType(field, expected_type).errorValue());
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @param value input value to validate
   * @param field name of the object field for error message construction
   */
  checkObjectId(value: string, field: string) {
    try {
      new ObjectId(value);
      return false;
    } catch (err) {
      this.errors.push(new GeneralErrors.InvalidValue(field).errorValue());
      return true;
    }
  }

  /**
   *
   * @param value input value to validate
   */
  validateId(value: any): void {
    const field = 'id';
    if (this.checkUndefined(value, field)) return;
    if (this.checkType(value, 'string', field)) return;
    if (this.checkObjectId(value, field)) return;
  }
}

export {
  BaseValidator,
};
