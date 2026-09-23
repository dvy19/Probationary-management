
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
        } = req.body;

        const resources = JSON.parse(req.body.resources);
        const topics = JSON.parse(req.body.topics);
        const outcomes = JSON.parse(req.body.outcomes);

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
            outcomes
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

