/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = new MongoMemoryServer();

export const connect = async (): Promise<void> => {
  const uri = await mongod.getConnectionString();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };

  await mongoose.connect(uri, mongooseOpts);
};

export const clearDatabase = async (): Promise<void> => {
  const { collections } = mongoose.connection;

  Promise.all(
    Object
      .keys(collections)
      .map(async key => {
        const collection = collections[key];
        await collection.deleteMany({});
      }),
  );
};

export const closeDatabase = async (): Promise<void> => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};
