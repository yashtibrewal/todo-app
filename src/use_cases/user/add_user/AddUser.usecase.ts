import { userQueries } from "../../../db";
import { AddUserRequest } from "./AddUser.requet";

class AddUserUseCase {

    async execute(user_data: AddUserRequest) {

        return await userQueries.createUser(user_data);

    }

}

const addUserUseCase = new AddUserUseCase();

export { addUserUseCase }