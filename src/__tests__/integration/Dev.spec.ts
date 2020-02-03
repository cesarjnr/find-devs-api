/* eslint-disable no-underscore-dangle */
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
    expect(response.body).toMatchObject({
      ...response.body,
      github_username: userData.github_username,
      techs: ['Node.js', 'ReactJS', 'React Native'],
      location: {
        type: 'Point',
        coordinates: [userData.longitude, userData.latitude],
      },
    });
  });

  it('should not store an existing dev and return it', async () => {
    const userData = {
      github_username: 'cesarjnr',
      techs: 'Node.js, ReactJS, React Native',
      location: {
        type: 'Point',
        coordinates: [-43.281157, -22.7856374],
      },
    };

    const createdUser = await Dev.create(userData);

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
    expect(response.body._id).toBe(createdUser.id);
  });

  it('should return all the 3 existing devs', async () => {
    const devs = [
      {
        github_username: 'cesarjnr',
        techs: 'Node.js, ReactJS, React Native',
        location: {
          type: 'Point',
          coordinates: [-43.281157, -22.7856374],
        },
      },
      {
        github_username: 'diego3d',
        techs: 'Node.js, ReactJS, React Native',
        location: {
          type: 'Point',
          coordinates: [10.752571, 59.914595],
        },
      },
      {
        github_username: 'diego3d',
        techs: 'Node.js, ReactJS, React Native',
        location: {
          type: 'Point',
          coordinates: [12.567043, 55.675797],
        },
      },
    ];

    await Dev.create(devs);

    const response = await request(app)
      .get('/devs');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(3);
  });
});
