
const { User } = require("../models/init");

class UserService {
  get = async (params) => {
    try {
      const id = parseInt(params.id);
      const user = await User.findByPk(id);
      return user
    } catch (e) {
      throw e;
    }
  };
  post = async (body) => {
    try {
      const user = await User.create(body);
      return user;
      
    } catch (e) {
        console.log(e)
      throw e;
    }
  };
  patch = async (params) => {
    try {
      const id = parseInt(params.id);
      const user = await User.findByPk(id);
      return user
    } catch (e) {
      throw e;
    }
  };
  delete = async (params) => {
    try {
      const id = parseInt(params.id);
      const user = await User.findByPk(id);
      return user
    } catch (e) {
      throw e;
    }
  };
}

module.exports = UserService;
