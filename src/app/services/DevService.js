const Dev = require('../models/Dev');

class DevService {
  async store(data) {
    return await Dev.create(data);
  }
}

module.exports = DevService;
