const Dev = require('../models/Dev');

class DevService {
  async index() {
    return await Dev.find();
  }

  async findOne(params) {
    return await Dev.findOne(params);
  }

  async store(data) {
    return await Dev.create(data);
  }
}

module.exports = DevService;
