import { AddUserController } from "./AddUser.controller";
import { AddUserValidator } from "./AddUser.validator";

const addUserController = new AddUserController();
const addUserValidator = new AddUserValidator();


export { addUserController, addUserValidator };