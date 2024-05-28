
const express = require("express");
const router = express.Router();
const UserController = new (require("../controllers/UserController"));


router.get("/users", UserController.get())

  module.exports = router;