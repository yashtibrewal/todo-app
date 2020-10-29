export class UserNotFound implements Error {
  name = 'UserNotFound';
  message: string;

  /**
   * Creates an error for a user not found
   */
  constructor() {
    this.message = `User not found`;
  }
}

export class UserAlreadyExists implements Error {
  name = 'UserAlreadyExists';
  message: string;
  /**
   * Creates an error for a user that already exists
   */
  constructor() {
    this.message = `User already exists`;
  }
}

