import validator from 'validator';
import {BaseValidator} from '../../abstract';
import {GeneralErrors} from '../../helpers';

class TaskValidator extends BaseValidator {
  constructor() {
    super();
  }

  validate_description(value: any): void {
    const field = 'description';
    if (this.checkUndefined(value, field)) return;
    if (this.checkType(value, 'string', field)) return;
    if (!(validator.isLength(value as string, {min: 3, max: 50}))) {
      this.errors.push(new GeneralErrors.InvalidValue(field).errorValue());
      return;
    }
  }

  // for optional properties
  validate_completed(value: any): void {
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

export {TaskValidator};
