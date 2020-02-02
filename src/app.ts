import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import routes from './routes';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.routes();
    dotenv.config();
    App.database();
  }

  private routes(): void {
    this.express.use(routes);
  }

  static database(): void {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }
}

export default new App().express;
