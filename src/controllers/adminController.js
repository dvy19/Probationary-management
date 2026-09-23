
const Meeting=require("../models/admin")

const createMeeting=async(req,res)=>{

    try{

        const user=req.user.userId;


        const{
            title,
            date,
            day,
            time,
            mode,
            description
            
        }=req.body

        const meet=await Meeting.create({
            title,
            date,
            day,
            time,
            mode,
            user,
            description
        })

        res.status(201).json({
            message:"created meet",
            meet
        })
    }
    catch (err) {
        console.log(err);

        res.status(500).json({
            message: "error"
        });
    }

}



module.exports={createMeeting}