
const express = require("express");
const router = express.Router();
const UserController = new (require("../controllers/UserController"))();
const TodoController = new (require("../controllers/TodoController"))();


router.get("/users/:id(\\d+)", UserController.get);
router.post("/users", UserController.post);
router.patch("/users/:id(\\d+)", UserController.patch);
router.delete("/users/:id(\\d+)", UserController.delete);

router.get("/todo/:id(\\d+)", TodoController.get);
router.post("/todo", TodoController.post);
router.patch("/todo/:id(\\d+)", TodoController.patch);
router.delete("/todo/:id(\\d+)", TodoController.delete);

module.exports = router;