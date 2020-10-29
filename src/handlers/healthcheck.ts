import {Request, Response} from 'express';
import {Middleware} from '../abstracts';

class HealthCheckMiddleware extends Middleware {
  /**
   * custom implementation for HealthCheckMiddleware
   * @param req
   * @param res
   */
  async implementation(req: Request, res: Response): Promise<void> {
    res.send({status: 'healthy'});
    return;
  }
}

export {HealthCheckMiddleware};
