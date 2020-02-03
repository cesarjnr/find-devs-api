import { Request, Response } from 'express';

import parseStringAsArray from '../../utils/parseStringAsArray';
import SearchService from '../services/SearchService';

export default class SearchController {
  static async index(req: Request, res: Response): Promise<Response> {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await SearchService.index({ latitude, longitude, techsArray });

    return res.json(devs);
  }
}
