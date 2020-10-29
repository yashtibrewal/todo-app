import {Result} from '../interfaces/Result';
import {GeneralError} from './GeneralError';

export class InvalidDataType extends Result<GeneralError> {
  /**
   *
   * @param field the field name of the object
   * @param expected_type the expected type of the object value
   */
  constructor(field: string, expected_type: string) {
    super(false, {
      message: `Invalid Data Type Detected for the field ${field},
      expected ${expected_type}`,
      name: 'InvalidDataType',
    });
  }
}

/**
 *
 * @param field the field name of the object
 */
export class InvalidValue extends Result<GeneralError> {
  constructor(field: string) {
    super(false, {
      message: `Invalid value found for the field ${field}`,
      name: 'InvalidValue',
    });
  }
}

export class NotFound extends Result<GeneralError> {
  /**
   *
   * @param field the field name of the object
   */
  constructor(field: string) {
    super(false, {
      message: `The field ${field} was expected`,
      name: 'NotFound',
    });
  }
}

export class UnexpectedError extends Result<GeneralError> {
  /**
   *
   * @param message custom message for UnexpectedError
   */
  constructor(message: string) {
    super(false, {
      message,
      name: 'UnexpectedError',
    });
  }
}
