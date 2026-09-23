
const Task=require("../models/Tasks")

const createTask=async(req,res)=>{

    try{

        const {
            name,
            description,
            about,
            domain,
            number,
            isActvie,
            level,
            priority,
            deadline,
           
        } = req.body;

        const resources = JSON.parse(req.body.resources);
        const topics = JSON.parse(req.body.topics);
        const outcomes = JSON.parse(req.body.outcomes);




        const task=new Task.create({
            name,
            description,
            about,
            domain,
            number,
            isActvie,
            level,
            priority,
            deadline,
            topics,
            resources,
            outcomes
        })


        res.status(201).json({
            message:"task created",
            task
        })
    }

    catch(err){
        console.log(err)

        res.status(500).json({
            message:"error",

        })
    }
}

module.exports=createTask