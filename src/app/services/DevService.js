const Dev = require('./models/Dev');

export default class DevService {
  async create(data) {
    return await Dev.create(data);
  }
}
