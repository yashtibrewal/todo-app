import { IUserDocument, userQueries } from "../../../db";
import { Either, errClass, successClass } from "../../../interfaces/Result";
import { UserNotFound } from "../UsecaseErrors";
import { GetUserDto } from "./dto";


type Response = Either<UserNotFound, IUserDocument>

class GetUserUseCase {

    async execute(data: GetUserDto): Promise<Response> {
        const result = await userQueries.getUser(data._id);
        if (result == undefined) {
            return errClass(new UserNotFound());
        } else {
            return successClass(result);
        }
    }

}

export const getUserUseCase = new GetUserUseCase();