import { AddUserRequest } from "./AddUser.requet";
import { UserValidator } from "../UserValidator";

class AddUserParser {

    errors: Error[];

    constructor(data: any) {

        const userValidator = new UserValidator();

        userValidator.validate_name(data.name);
        userValidator.validate_email(data.email);
        userValidator.validate_password(data.password);

        this.errors = userValidator.errors;

    }

    convert(data: any): AddUserRequest {

        let converted_object: any = {}
        converted_object = data;
        return converted_object;

    }

}

export { AddUserParser };