import { userQueries } from "../../../db";
import { ModificationResponse } from "../../../interfaces";
import { Either, successClass } from "../../../interfaces";
import { DeleteUserDto } from "./dto";


type Response = Either<ModificationResponse, ModificationResponse>

class DeleteUserUseCase {
	/**
   * Delete user and return a document or a error based on query
   * @param data
   */
	async execute(data: DeleteUserDto): Promise<Response> {
		const result = await userQueries.deleteUser(data._id);
		return successClass(result);
	}
}

export const deleteUserUseCase = new DeleteUserUseCase();
