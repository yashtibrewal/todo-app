import {Request, Response} from 'express';
import {Middleware} from '../../../abstracts';
import {GetAllUsersParser} from './parser';
import {GetAllUsersParamRequest} from './request';


export class GetAllUserValidator extends Middleware {
  async implementation(req: Request, res: Response): Promise<void> {
    const getAllUsersParser = new GetAllUsersParser(req.query as unknown as GetAllUsersParamRequest);
    if (getAllUsersParser.errors.length > 0) {
      res.locals.response = await this.fail(getAllUsersParser.errors);
      res.status(400);
      await this.sendResponse(res);
    }
    return;
  }
}
