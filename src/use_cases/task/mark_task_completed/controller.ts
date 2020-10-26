import { Request, Response } from "express";
import { markTaskCompletedUseCase } from "./usecase";
import { Middleware } from "../../../abstracts";
import { MarkTaskCompletedRequestParam } from "./request";
import { MarkTaskCompletedDtoConverter } from "./dto";


export class MarkTaskCompletedController extends Middleware {
    async implementation(req: Request, res: Response): Promise<void> {
        const markTaskCompletedDtoConverter = new MarkTaskCompletedDtoConverter(req.params as unknown as MarkTaskCompletedRequestParam);
        const result = await markTaskCompletedUseCase.execute(markTaskCompletedDtoConverter.getConvertedDto());
        if (result.isSuccessClass()) {
            res.locals.response = await this.success(result.value);
        }
        else {
            res.locals.response = await this.fail([result.value]);
            res.status(400);
        }
        await this.sendResponse(res);
        return;
    }
}