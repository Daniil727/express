const express = require("express");
const indexRouter = require ("./routes/index")

const app = express();
const port = 3001;

const { init, User, Todo} = require("./models/init");


app.use(express.json());
app.use("/index", indexRouter );

app.listen(port, async () => {
  console.log(`Порт ${port}`);
  await init();
});

module.exports = app;
// запросы на User 

// const UserService = new (require("./controllers/UserController"))


// app.get("/users", UserController.get())
// async (req, res) => {
//   try {
//     const users = await User.findAll({
//          include: Todo
//     });
//     return res.json({
//       items: users,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(400).send("что-то пошло не так");
//   }
// });
// app.get("/users/:id(\\d+)", async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const user = await User.findByPk(id);
//     if (user) {
//       return res.json(user);
//     } else {
//       return res.status(404).send("Пользователь не найден");
//     }
//   } catch (e) {
//     res.status(400).send("что-то пошло не так");
//   }
// });
// app.post("/users", async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     return res.status(201).json(user);
//   } catch (e) {
//     console.log(e);
//     res.status(400).send("что-то пошло не так");
//   }
// });
// app.patch("/users/:id(\\d+)", async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const user = await User.findByPk(id);
//     if (user) {
//       if (req.body.first_name) {
//         user.first_name = req.body.first_name;
//       }
//       if (req.body.last_name) {
//         user.last_name = req.body.last_name;
//       }
//       if (req.body.email) {
//         user.email = req.body.email;
//       }
//       if (req.body.password) {
//         user.password = req.body.password;
//       }
//       await user.save();
//       return res.json(user);
//     } else {
//       return res.status(404).send("Пользователь не найден");
//     }
//   } catch (e) {
//     res.status(400).send("что-то пошло не так");
//   }
// });
// app.delete("/users/:id(\\d+)", async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const user = await User.findByPk(id);
//     if (user) {
//       await user.destroy();
//       return res.sendStatus(204);
//     } else {
//       return res.status(404).send("Пользователь не найден");
//     }
//   } catch (e) {
//     res.status(400).send("что-то пошло не так");
//   }
// });


// //запросы todo

// app.get("/todo/:id(\\d+)", async (req, res) => {
//   try {
//      const id = parseInt(req.params.id);
//     const todo = await Todo.findOne({
//       where: {
//         id: req.params.id
//       }
//     });
//     if (todo) {
//       return res.json(todo);
//       // return res.json({
//       // items: todo,
//       // });
//     } else {
//       return res.status(404).send("список не найден");
//     }
//   } catch (e) {
//     res.status(400).send("что-то пошло не так");
//   }
// });
// app.post("/todo", async (req, res) => {
//   try {
//     const todo = await Todo.create(req.body);
//     return res.status(201).json(todo);
//   } catch (e) {
//     console.log(e);
//     res.status(400).send("что-то пошло не так");
//   }
// });
// app.patch("/todo/:id(\\d+)", async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const todo = await Todo.findByPk(id);
//     if (todo) {
//       if (req.body.title) {
//         todo.title = req.body.title;
//       }
//       if (req.body.body) {
//         todo.body = req.body.body;
//       }
      
//       await todo.save();
//       return res.json(todo);
//     } else {
//       return res.status(404).send("список не найден");
//     }
//   } catch (e) {
//     res.status(400).send("что-то пошло не так");
//   }
// });
// app.delete("/todo/:id(\\d+)", async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const todo = await Todo.findByPk(id);
//     if (todo) {
//       await todo.destroy();
//       return res.sendStatus(204);
//     } else {
//       return res.status(404).send("список не найден");
//     }
//   } catch (e) {
//     res.status(400).send("что-то пошло не так");
//   }
// });




