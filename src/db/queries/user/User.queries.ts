import { IUserDocument, UserModel, IUser } from "../../models";

class UserQueries {

    async createUser(user: IUser):Promise<IUserDocument> {

        return await UserModel.create(user);
        
    }

}

export { UserQueries };