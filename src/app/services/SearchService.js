const Dev = require('../models/Dev');

class SearchService {
    async index(params) {
        const { latitude, longitude, techsArray } = params;

        return await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });
    }
}

module.exports = SearchService;
