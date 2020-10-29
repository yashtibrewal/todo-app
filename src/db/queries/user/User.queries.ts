/**
 * @author Yash Tibrewal
 */

import {IUserDocument, UserModel, IUser} from "../../models";
import {ObjectId} from "mongodb";

export class UserQueries {
	/**
   * to create a user document
   * @param user
   */
	async createUser(user: IUser): Promise<IUserDocument> {
		return await UserModel.create(user);
	}

	/**
   * query for getting all the users documents
   * @param skip amount to skip document the result
   * @param limit amount to limit the documents in the result
   */
	async getAllUsers(skip: number, limit: number): Promise<IUserDocument[]> {
		return await UserModel.aggregate([
			{
				$skip: skip,
			},
			{
				$limit: limit,
			},
		]);
	}

	/**
   * to query a user document based on the id
   * @param id
   */
	async getUser(id: ObjectId): Promise<IUserDocument | null> {
		return await UserModel.findById(id);
	}
}
