import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Users extends MongoDataSource {

  async getUsers() {
    return await this.model.find();
  }

  async getUser(id) {
    return await this.findOneById(id);
  }
  async createUser({ name, age  }) {
    return await this.model.create({ name, age});
  }

}