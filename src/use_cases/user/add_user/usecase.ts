import { IUserDocument, userQueries } from "../../../db";
import { Either, successClass } from "../../../interfaces/Result";
import { AddUserDto } from "./dto";

type Response = Either<UseCaseError, IUserDocument>
class AddUserUseCase {

    async execute(user_data: AddUserDto): Promise<Response> {

        return successClass(await userQueries.createUser(user_data));

    }

}

const addUserUseCase = new AddUserUseCase();

export { addUserUseCase }