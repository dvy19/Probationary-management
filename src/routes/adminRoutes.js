
const express=require("express")

const router=express.Router()

const {createMeeting}=require("../controllers/adminController")

const authMiddleware=require('../middleware/authMiddleware')

router.post('/create-meet' , authMiddleware, createMeeting)

module.exports=router