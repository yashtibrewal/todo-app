import { IUserDocument, userQueries } from "../../../db";
import { UserNotFound } from "../UsecaseErrors";
import { GetUserDto } from "./dto";


class GetUserUseCase {

    async execute(data: GetUserDto): Promise<IUserDocument | UserNotFound> {
        const result = await userQueries.getUser(data._id);
        if (result == undefined) {
            return new UserNotFound();
        } else {
            return result;
        }
    }

}

export const getUserUseCase = new GetUserUseCase();