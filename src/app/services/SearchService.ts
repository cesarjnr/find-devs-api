import Dev, { DevInterface } from '../models/Dev';

interface SearchParamsInterface {
  latitude: number;
  longitude: number;
  techsArray: string[];
}

export default class SearchService {
  static async index(params: SearchParamsInterface): Promise<DevInterface[]> {
    const { latitude, longitude, techsArray } = params;

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return devs;
  }
}
