
const Task = require("../models/Tasks");

const createTask = async (req, res) => {
    try {

        const user = req.user.userId;

        console.log(user);

        const {
            name,
            description,
            about,
            domain,
            number,
            isActive,
            level,
            priority,
            deadline,
            start,
            resources,
            topics,
            outcomes
        } = req.body;


        const task = await Task.create({
            user,
            name,
            description,
            about,
            domain,
            number,
            isActive,
            level,
            priority,
            deadline,
            topics,
            resources,
            outcomes,
            start
        });

        

        res.status(201).json({
            message: "task created",
            task
        });
    }

    catch (err) {
        console.log(err);

        res.status(500).json({
            message: "error"
        });
    }
};


const getTasks=async(req,res)=>{

    try{

        const tasks=await Task.find();
        const totalTasks = await Task.countDocuments();

        res.status(200).json({
            message:"tasks rendered",
            tasks,
            totalTasks
        })
    }
    
    catch (err) {
        console.log(err);

        res.status(500).json({
            message: "error"
        });
    }
    

}



module.exports = {createTask , getTasks};

