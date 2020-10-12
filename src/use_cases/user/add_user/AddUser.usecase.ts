import { userQueries } from "../../../db";

class AddUserUseCase {

    async execute(user_data:any) {

        return userQueries.createUser(user_data);

    }

}

const addUserUseCase = new AddUserUseCase();

export { addUserUseCase }