import {IUserDocument, userQueries} from "../../../db";
import {Either, successClass} from "../../../interfaces/Result";
import {AddUserDto} from "./dto";
import {UseCaseError} from "../../../helpers";
import bcrypt from "bcrypt";
import { ENCRYPTION_ROUNDS } from "../../../helpers/constants";

type Response = Either<UseCaseError, IUserDocument>
class AddUserUseCase {
	async execute(user_data: AddUserDto): Promise<Response> {

		user_data.password = await bcrypt.hash(user_data.password, ENCRYPTION_ROUNDS);

		return successClass(await userQueries.createUser(user_data));
	}
}

const addUserUseCase = new AddUserUseCase();

export {addUserUseCase};
