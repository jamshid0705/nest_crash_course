import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request,Response,NextFunction } from 'express';

@Injectable()
export class AnotherMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Another middleware')
    console.log(req.body)
    next();
  }
}
