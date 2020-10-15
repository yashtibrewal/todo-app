import { userQueries } from "../../../db";

class GetAllUsersUseCase {

    async execute() {
        return await userQueries.getAllUsers();
    }

}

export const getAllUsersUseCase = new GetAllUsersUseCase();
