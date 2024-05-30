const TodoService = new (require("../services/TodoSer"))();

class TodoController {
  get = async (req, res) => {
    try {
        const todo = await TodoService.get(req.params)
      if (todo) {
        return res.json(todo);
      } else {
        return res.status(404).send("список не найден");
      }
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
  post = async (req, res) => {
    try {
        const todo = await TodoService.post(req.body)
      return res.status(201).json(todo);
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
  patch = async (req, res) => {
    try {
        const todo = await TodoService.patch(req.params)
      if (todo) {
        if (req.body.title) {
          todo.title = req.body.title;
        }
        if (req.body.body) {
          todo.body = req.body.body;
        }

       await todo.save();
        return res.json(todo);
      } else {
        return res.status(404).send("список не найден");
      }
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
  delete = async (req, res) => {
    try {
        const todo = await TodoService.delete(req.params)
      if (todo) {
        await todo.destroy();
        return res.sendStatus(204);
      } else {
        return res.status(404).send("список не найден");
      }
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
}

module.exports = TodoController;