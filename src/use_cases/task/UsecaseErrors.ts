import {Result} from '../../interfaces/Result';
import {UseCaseError} from '../../helpers';


export class TaskAlreadyExists extends Result<UseCaseError> {
  /**
   * Creating a error for a task which already exists
   */
  constructor() {
    super(false, {
      message: 'The task already exists',
      name: 'TaskAlreadyExists',
    });
  }
}

export class TaskNotFound extends Result<UseCaseError> {
  /**
   * Creating a error for a task which was not found
   */
  constructor() {
    super(false, {
      message: `Task not found`,
      name: 'TaskNotFound',
    });
  }
}
