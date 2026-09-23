const express = require("express");

const router = express.Router();

const authMiddleware=require('../middleware/authMiddleware')

const {
    login,
    register
} = require("../controllers/UserController");


router.post("/login", login);
router.post("/register" , register)

module.exports=router