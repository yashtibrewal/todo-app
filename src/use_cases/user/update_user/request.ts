/* eslint-disable @typescript-eslint/no-explicit-any */

import { GetByIdParams } from "../../../interfaces";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
interface UpdateUserRequest {
    name: any,
    email: any,
    password: any,
}

export {UpdateUserRequest};

export type UpdateUserParamRequest = GetByIdParams;