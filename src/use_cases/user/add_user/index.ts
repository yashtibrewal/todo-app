import { AddUserController } from "./controller";
import { AddUserValidator } from "./validator";

const addUserController = new AddUserController();
const addUserValidator = new AddUserValidator();


export { addUserController, addUserValidator };