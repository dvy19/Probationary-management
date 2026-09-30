
const express=require("express")

const router=express.Router()

const createQuiz=require("../controllers/QuizController")

const {createMeeting}=require("../controllers/adminController")

const authMiddleware=require('../middleware/authMiddleware')

router.post('/create-meet' , authMiddleware, createMeeting)

router.post('/create-quiz' , createQuiz )

module.exports=router