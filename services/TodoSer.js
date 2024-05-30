const { Todo } = require("../models/init");

class TodoService {
    get = async (params) => {
        try {
            const id = parseInt(params.id);
                const todo = await Todo.findOne({
                  where: {
                    id: params.id
                  }
                });
          return todo
        } catch (e) {
          throw e;
        }
      };
      post = async (body) => {
        try {
            const todo = await Todo.create(body);
          return todo;
        } catch (e) {
          throw e;
        }
      };
      patch = async (params) => {
        try {
            const id = parseInt(params.id);
    const todo = await Todo.findByPk(id);
          return todo
        } catch (e) {
          throw e;
        }
      };
      delete  = async (params) => {
        try {
            const id = parseInt(params.id);
                const todo = await Todo.findByPk(id);
          return todo
        } catch (e) {
          throw e;
        }
      };
}

module.exports = TodoService;