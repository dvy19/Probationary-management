const express = require("express");

const router = express.Router();

const authMiddleware=require('../middleware/authMiddleware')

const {
    login,
} = require("../controllers/UserController");


router.post("/login", login);

module.exports=router