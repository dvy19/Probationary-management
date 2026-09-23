
const express=require("express")
const {createTask , getTasks , getTaskById}=require('../controllers/TaskController')

const router=express.Router()

const authMiddleware=require("../middleware/authMiddleware")



router.post('/create-task' , authMiddleware, createTask)
router.get('/get-tasks' , authMiddleware ,getTasks )
router.post('/get-task-id/:taskId' , authMiddleware , getTaskById)

module.exports=router