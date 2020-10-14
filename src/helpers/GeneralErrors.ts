class InvalidDataType implements Error {
    name = 'InvalidDataType';
    message: string;
    constructor(field: string, expected_type: string) {
        this.message = `Invalid Data Type Detected for the field ${field}, expected ${expected_type}`;
    }
}

class InvalidValue implements Error {
    name = "InvalidValue";
    message: string;
    constructor(field: string) {
        this.message = `Invalid value found for the field ${field}`;
    }
}

class NotFound implements Error {
    name = "NotFound";
    message: string;
    constructor(field: string) {
        this.message = `The field ${field} was expected`;
    }
}

class UnexpectedError implements Error {
    name = "UnexpectedError";
    message: string;
    constructor(message: string) {
        this.message = message;
    }
}

export { InvalidDataType, InvalidValue, NotFound, UnexpectedError }