import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import routes from './routes';
import { connectToTestDB } from './__tests__/testdb-handler';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();

    dotenv.config();
    App.database();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use(routes);
  }

  static database(): void {
    if (process.env.NODE_ENV === 'test') {
      connectToTestDB();
    } else {
      mongoose.connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
    }
  }
}

export default new App().express;
