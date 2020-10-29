/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export interface PaginationParams {

    skip: any,
    limit: any

}

export interface PaginationParamsDto {

    /**
     * defines how many documents to skip
     */
    skip: number,

    /**
     * defines how many documents to limit the result
     */
    limit: number

}
