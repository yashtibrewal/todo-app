export class UserNotFound implements Error {
    name = 'UserNotFound';
    message: string;
    constructor() {
      this.message = `User not found`;
    }
}

export class UserAlreadyExists implements Error {
    name = 'UserAlreadyExists';
    message: string;
    constructor() {
      this.message = `User already exists`;
    }
}

