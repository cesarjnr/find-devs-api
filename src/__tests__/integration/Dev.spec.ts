import request from 'supertest';

import { closeDatabase, clearDatabase } from '../../app/database/testdb-handler';
import app from '../../app';
import Dev from '../../app/models/Dev';

describe('Dev functionalities tests', () => {
  afterEach(async () => clearDatabase());
  afterAll(async () => closeDatabase());

  it('should store 1 dev', async () => {
    const userData = {
      github_username: 'cesarjnr',
      techs: 'Node.js, ReactJS, React Native',
      latitude: -22.7856374,
      longitude: -43.281157,
    };

    const response = await request(app)
      .post('/devs')
      .send(userData);

    expect(response.status).toBe(200);
  });

  it('should not store an existing dev and return it', async () => {
    const userData = {
      github_username: 'cesarjnr',
      techs: 'Node.js, ReactJS, React Native',
      latitude: -22.7856374,
      longitude: -43.281157,
    };

    await Dev.create(userData);

    const existingUserData = {
      github_username: 'cesarjnr',
      techs: 'Node.js, ReactJS, React Native',
      latitude: -22.7856374,
      longitude: -43.281157,
    };

    const response = await request(app)
      .post('/devs')
      .send(existingUserData);

    const devs = await Dev.find();

    expect(response.status).toBe(200);
    expect(devs.length).toBe(1);
  });
});
