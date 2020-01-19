const axios = require('axios');

const parseStringAsArray = require('../../utils/parseStringAsArray');
const DevService = require('../services/DevService');

class DevController {
    async index(req, res) {
        const devs = await new DevService().index();

        return res.json(devs);
    }

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await new DevService().findOne({ github_username });
        
        if (!dev) {
            const githubApiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = githubApiResponse.data;
    
            const techsArray = parseStringAsArray(techs);
    
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };
    
            dev = await new DevService().store({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }

        return res.json(dev);
    }
}

module.exports = new DevController();
