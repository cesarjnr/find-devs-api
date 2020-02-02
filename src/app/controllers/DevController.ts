import axios from 'axios';
import { Request, Response } from 'express';

import parseStringAsArray from '../../utils/parseStringAsArray';
import DevService from '../services/DevService';

export default class DevController {
  static async index(req: Request, res: Response): Promise<Response> {
    const devs = await DevService.index();

    return res.json(devs);
  }

  static async store(req: Request, res: Response): Promise<Response> {
    console.log(req);
    const {
      github_username, techs, latitude, longitude,
    } = req.body;

    let dev = await DevService.findOne({ github_username });

    if (!dev) {
      const githubApiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

      const { login, avatar_url, bio } = githubApiResponse.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await DevService.store({
        github_username,
        login,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });
    }

    return res.json(dev);
  }
}
