import response from '@/utils/response';
import { Request, Response } from 'express';

class HomeController {
  public index(req: Request, res: Response): Response {
    return response(res, {
      code: 200,
      message: 'Qonvert running normally!',
      body: 'Hello World!',
    });
  }
}

export default new HomeController();
