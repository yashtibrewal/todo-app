import { IUserDocument, UserModel, IUser } from "../../models";
import { ObjectId } from "mongodb";

export class UserQueries {

    async createUser(user: IUser): Promise<IUserDocument> {
        return await UserModel.create(user);
    }

    async getAllUsers(): Promise<IUserDocument[]> {
        return await UserModel.find();
    }

    async getUser(id: ObjectId): Promise<IUserDocument | null> {
        return await UserModel.findById(id);
    }


}
