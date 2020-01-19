const SearchService = require('../services/SearchService');

const parseStringAsArray = require('../../utils/parseStringAsArray');

class SearchController {
    async index(req, res) {
        const { latitude, longitude, techs } = req.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await new SearchService().index({ latitude, longitude, techsArray });

        return res.json(devs);
    }
}

module.exports = new SearchController();