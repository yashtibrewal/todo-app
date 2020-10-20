import { Request, Response, NextFunction } from "express";
import { addUserUseCase } from "./usecase";
import { Middleware } from "../../../abstracts";
import { AddUserDtoConverter } from "./dto";

class AddUserController extends Middleware {

    async implementation(req: Request, res: Response): Promise<void> {
        const addUserDtoConverter = new AddUserDtoConverter(req.body);
        const result = await addUserUseCase.execute(addUserDtoConverter.getConvertedObject());
        if (result.isErrClass()) {
            res.locals.response = await this.fail([result.value]);
            res.status(400);
        }
        else {
            res.locals.response = await this.success(result.value);
            res.status(201);
        }
        await this.sendResponse(res);
        return;
    }
}

export { AddUserController };