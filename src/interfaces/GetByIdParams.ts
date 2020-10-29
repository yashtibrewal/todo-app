import {ObjectId} from 'mongodb';

export interface GetByIdParamsDto {

    /**
     * represents the id field of the model
     */
    _id: ObjectId;

}

export interface GetByIdParams {

    /**
     * denotes the id field in the request parameters
     */
    id: any

}
