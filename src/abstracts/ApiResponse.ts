import { Request, Response } from "express";
import { ApiResponseStructure } from "../interfaces";

abstract class ApiResponse {

    async fail(errors: Error[]): Promise<ApiResponseStructure> {
        return {
            success: false,
            data: {},
            errors,
        }
    }

    async success(data: any): Promise<ApiResponseStructure> {
        return {
            success: true,
            data: data,
            errors: [],
        }
    }

    async sendResponse(res: Response) {
        res.send(res.locals.response);
    }

}

export { ApiResponse };