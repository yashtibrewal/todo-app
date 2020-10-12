import { Request, Response } from "express";

abstract class ApiResponse {

    async sendResponse(req: Request, res: Response) {
        res.send(res.locals.response);
    }

}

export { ApiResponse };