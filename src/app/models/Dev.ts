import { Schema, model, Document } from 'mongoose';

import PointSchema from './utils/PointSchema';

export interface DevInterface extends Document {
  name: string;
  github_username: string;
  bio: string;
  avatar_url: string;
  techs: string[];
  location: {
    coordinates: [number, number];
    type: 'Point';
  };
}

const DevSchema = new Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
});

export default model<DevInterface>('Dev', DevSchema);
