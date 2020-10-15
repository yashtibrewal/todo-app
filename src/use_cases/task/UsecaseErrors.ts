export class TaskNotFound implements Error {
    name = 'TaskNotFound';
    message: string;
    constructor() {
        this.message = `Task not found`;
    }
}

export class TaskAlreadyExists implements Error {
    name = 'TaskAlreadyExists';
    message: string;
    constructor() {
        this.message = `Task already exists`;
    }
}

