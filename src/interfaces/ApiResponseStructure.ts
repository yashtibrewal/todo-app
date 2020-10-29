/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
interface ApiResponseStructure {

    success: boolean;
    data: any;
    errors: Error[];

}

export {ApiResponseStructure};
