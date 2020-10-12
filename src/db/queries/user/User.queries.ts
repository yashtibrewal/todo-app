import { UserModel } from "../../models/user/user.model";
import { AddUserRequest } from "../../../use_cases/user/add_user/AddUser.requet";

class UserQueries {

    async createUser(user: AddUserRequest) {
        console.debug('called create user query with ', JSON.stringify(user));
        return await UserModel.create(user);
    }

}

export { UserQueries };