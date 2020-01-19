const Dev = require('../models/Dev');

class DevService {
  async find(params) {
    return await Dev.findOne(params);
  }

  async store(data) {
    return await Dev.create(data);
  }
}

module.exports = DevService;
