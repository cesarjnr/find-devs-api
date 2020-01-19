const axios = require('axios');

const DevService = require('../services/DevService');

class DevController {
    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        const githubApiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

        const { name = login, avatar_url, bio } = githubApiResponse.data;

        const techsArray = techs.split(',').map(tech => tech.trim());

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        };

        const dev = await new DevService().store({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        });

        return res.json(dev);
    }
}

module.exports = new DevController();
