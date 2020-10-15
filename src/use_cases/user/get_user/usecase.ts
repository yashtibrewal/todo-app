import { IUserDocument, userQueries } from "../../../db";
import { UserNotFound } from "../UsecaseErrors";
import { GetUserRequest } from "./request";


class GetUserUseCase {

    async execute(data: GetUserRequest): Promise<IUserDocument | UserNotFound> {
        const result = await userQueries.getUser(data.id);
        if (result == undefined) {
            return new UserNotFound();
        } else {
            return result;
        }
    }

}

export const getUserUseCase = new GetUserUseCase();