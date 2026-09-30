const express = require("express")
const getUsers = require("../controllers/getUsersController")
const postUsers = require("../controllers/postUsersController")
const verifyPassword = require("../middlewares/verifyPasswordMiddleware")

const router = express.Router()

router.route("/users").get(verifyPassword ,getUsers).post(verifyPassword ,postUsers)

module.exports = router