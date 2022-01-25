import express, { Application } from 'express';
import cors from 'cors';
import corsConfig from '@/configs/cors';
import { router as HomeRouter } from '@/components/home';

class QonvertApp {
  private readonly app: Application;

  private readonly port?: number | string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.plugins();
    this.routes();
  }

  private plugins(): void {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors(corsConfig));
  }

  private routes(): void {
    this.app.use(HomeRouter);
  }

  public runApp(): void {
    this.app.listen(this.port, () =>
      console.log(`Application running on port ${this.port}`),
    );
  }
}

export default new QonvertApp();
