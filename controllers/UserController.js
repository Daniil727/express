const UserService = new (require("../services/UserSer"))();

class UserController {
  get = async (req, res) => {
    try {
        const user = await UserService.get(req.params)
      if (user) {
        return res.json(user);
      } else {
        return res.status(404).send("Пользователь не найден");
      }
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
  post = async (req, res) => {
    try {
        const user = await UserService.post(req.body)
      return res.status(201).json(user);
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
  patch = async (req, res) => {
    try {
        const user = await UserService.patch(req.params)
      if (user) {
        if (req.body.first_name) {
          user.first_name = req.body.first_name;
        }
        if (req.body.last_name) {
          user.last_name = req.body.last_name;
        }
        if (req.body.email) {
          user.email = req.body.email;
        }
        if (req.body.password) {
          user.password = req.body.password;
        }
        user.save();
        return res.json(user);
      } else {
        return res.status(404).send("Пользователь не найден");
      }
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
  delete = async (req, res) => {
    try {
        const user = await UserService.delete(req.params)
        if (user) {
                await user.destroy();
                  return res.sendStatus(204);
                } else {
                  return res.status(404).send("Пользователь не найден");
                }
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
}

module.exports = UserController;
