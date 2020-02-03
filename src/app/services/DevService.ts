import Dev, { DevInterface } from '../models/Dev';

class DevService {
  static async index(): Promise<DevInterface[]> {
    const devs = await Dev.find();

    return devs;
  }

  static async findOne(params): Promise<DevInterface> {
    const dev = await Dev.findOne(params);

    return dev;
  }

  static async store(data): Promise<DevInterface> {
    const dev = await Dev.create(data);

    return dev;
  }
}

export default DevService;
