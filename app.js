const express = require("express");

const app = express();
const port = 3001;

app.use(express.json());

const users = [];
app.get("/users", (req, res) => {
  try {
    res.json({
      items: users,
      meta: {},
    });
  } catch (e) {
    res.status(400).send("что-то пошло не так");
  }
});
app.get("/users/:id(\\d+)", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = users.find((item) => item.id === id);
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).send("Пользователь не найден");
    }
  } catch (e) {
    res.status(400).send("что-то пошло не так");
  }
});
app.post("/users", (req, res) => {
  try {
    users.push(req.body);
    return res.status(201).json(req.body);
  } catch (e) {
    res.status(400).send("что-то пошло не так");
  }
});
app.patch("/users/:id(\\d+)", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user_index = users.findIndex((item) => item.id === id);
    if (user_index === -1) {
      return res.status(404).send("Пользователь не найден");
    }
    users[user_index] = req.body;
    return res.json(users[user_index]);
  } catch (e) {
    res.status(400).send("что-то пошло не так");
  }
});
app.delete("/users/:id(\\d+)", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user_index = users.findIndex((item) => item.id === id);
    if (user_index === -1) {
      return res.status(404).send("Пользователь не найден");
    }
    users[user_index] = req.body;
    users.splice(user_index, 1);
    return res.sendStatus(200);
  } catch (e) {
    res.status(400).send("что-то пошло не так");
  }
});
app.listen(port, () => {
  console.log(`Порт ${port}`);
});

module.exports = app;

// это пока что оставил (было при установке express)

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
