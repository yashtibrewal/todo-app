import { IUserDocument, userQueries } from "../../../db";
import { Either, successClass } from "../../../interfaces/Result";

type Response = Either<UseCaseError, IUserDocument[]>
class GetAllUsersUseCase {

    async execute(): Promise<Response> {
        return successClass(await userQueries.getAllUsers());
    }

}

export const getAllUsersUseCase = new GetAllUsersUseCase();
