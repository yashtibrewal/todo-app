import {IUserDocument, userQueries} from "../../../db";
import {Either, errClass, successClass} from "../../../interfaces/Result";
import {UpdateUserDto, UpdateUserParamDto} from "./dto";
import {UseCaseError} from "../../../helpers";
import { UserNotFound } from "../UsecaseErrors";

type Response = Either<UseCaseError, IUserDocument>
class UpdateUserUseCase {
	async execute(user_params: UpdateUserParamDto,user_data: UpdateUserDto): Promise<Response> {
		const result = await userQueries.updateUser(user_params._id,user_data);
		
		if(result == undefined){
			return errClass(new UserNotFound());
		}
		
		return successClass(result);
	}
}

const updateUserUseCase = new UpdateUserUseCase();

export {updateUserUseCase};
