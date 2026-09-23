
const express=require("express")
const {createTask , getTasks}=require('../controllers/TaskController')

const router=express.Router()

const authMiddleware=require("../middleware/authMiddleware")



router.post('/create-task' , authMiddleware, createTask)
router.get('/get-tasks' , authMiddleware ,getTasks )

module.exports=router