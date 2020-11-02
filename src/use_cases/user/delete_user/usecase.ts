import {IUserDocument, userQueries} from "../../../db";
import {Either, errClass, successClass} from "../../../interfaces/Result";
import {UserNotFound} from "../UsecaseErrors";
import {DeleteUserDto} from "./dto";


type Response = Either<UserNotFound, IUserDocument>

class DeleteUserUseCase {
	/**
   * Delete user and return a document or a error based on query
   * @param data
   */
	async execute(data: DeleteUserDto): Promise<Response> {
		const result = await userQueries.deleteUser(data._id);
		if (result == undefined) {
			return errClass(new UserNotFound());
		} else {
			return successClass(result);
		}
	}
}

export const deleteUserUseCase = new DeleteUserUseCase();
