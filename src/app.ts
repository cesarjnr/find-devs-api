import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    App.database();
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
