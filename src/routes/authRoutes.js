const express = require("express");

const router = express.Router();

const authMiddleware=require('../middleware/authMiddleware')

const {
    login,
    register,
    createProfile,
    getMeetings,
    getProfile,
    saveFCMTokens
} = require("../controllers/UserController");


router.post("/login", login);
router.post("/register" , register)
router.post('/create-profile' , authMiddleware, createProfile)
router.get('/get-profile' , authMiddleware, getProfile)
router.get('/get-meetings' , authMiddleware , getMeetings)

router.post('/save-tokens' , authMiddleware, saveFCMTokens )





module.exports=router