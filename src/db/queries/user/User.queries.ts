import {IUserDocument, UserModel, IUser} from '../../models';
import {ObjectId} from 'mongodb';

export class UserQueries {
  async createUser(user: IUser): Promise<IUserDocument> {
    return await UserModel.create(user);
  }

  async getAllUsers(skip:number, limit:number): Promise<IUserDocument[]> {
    return await UserModel.aggregate([
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ]);
  }

  async getUser(id: ObjectId): Promise<IUserDocument | null> {
    return await UserModel.findById(id);
  }
}
