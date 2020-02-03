import FactoryGirl from 'factory-girl';

import Dev, { DevInterface } from '../models/Dev';

const adapter = new Factory.MongooseAdapter();

factory.define<DevInterface>('Dev', Dev, {
  name: faker.name.findName(),
  github_username: faker.internet.userName(),
  bio: faker.lorem.paragraph(),
  avatar_url: faker.image.imageUrl(),
  techs: [faker.lorem.word()],
  location: {
    coordinates: [+faker.address.latitude(), +faker.address.longitude()],
    type: 'Point',
  },
});
