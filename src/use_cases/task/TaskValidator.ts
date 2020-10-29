import validator from 'validator';
import {BaseValidator} from '../../abstract';
import {GeneralErrors} from '../../helpers';

export class TaskValidator extends BaseValidator {
  constructor() {
    super();
  }

  /**
   * function to validate the description field of Task document
   * @param value data to validate
   */
  validateDescription(value: any): void {
    const field = 'description';
    if (this.checkUndefined(value, field)) return;
    if (this.checkType(value, 'string', field)) return;
    if (!(validator.isLength(value as string, {min: 3, max: 50}))) {
      this.errors.push(new GeneralErrors.InvalidValue(field).errorValue());
      return;
    }
  }

  /**
   * function to validate the completed field of the Task document
   * @param value date to validate
   */
  validateCompleted(value: any): void {
    if (value !== undefined) {
      const field = 'completed';
      if (this.checkType(value, 'string', field)) return;
      if (validator.isEmpty(value)) {
        this.errors.push(new GeneralErrors.InvalidValue(field).errorValue());
        return;
      }
      if (!(validator.isBoolean(value))) {
        this.errors.push(new GeneralErrors.InvalidValue(field).errorValue());
        return;
      }
    }
  }
}
