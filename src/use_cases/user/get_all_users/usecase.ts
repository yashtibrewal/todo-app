import { IUserDocument, userQueries } from "../../../db";
import { Either, successClass } from "../../../interfaces/Result";
import { GetAllUsersParamsDto } from "./dto"

type Response = Either<UseCaseError, IUserDocument[]>
class GetAllUsersUseCase {

    async execute(data: GetAllUsersParamsDto): Promise<Response> {
        return successClass(await userQueries.getAllUsers(data.skip, data.limit));
    }

}

export const getAllUsersUseCase = new GetAllUsersUseCase();
