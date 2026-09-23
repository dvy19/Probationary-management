const mongoose=require("mongoose")

const user=new mongoose.Schema({
    email:String,
    password:String,
    role:String
})

const userDetails=new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    
    name:String,
    year:String,
    branch:String,
    dob:String,
    city:String,
    isProbationary:Boolean,
    domain:String,
    github:String,
    sgpa:String,
    leetcode:String,
    linkedin:String,
    studentNo:String,
})

const userStats = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true
    },

    totalTasks: {
        type: Number,
        default: 0
    },

    tasksCompleted: {
        type: Number,
        default: 0
    },

    pendingTasks: {
        type: Number,
        default: 0
    },

    totalMeet: {
        type: Number,
        default: 0
    },

    meetAttended: {
        type: Number,
        default: 0
    }

});

const attendance = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    meeting: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meeting",
        required: true
    },

    present: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
});

const Attendance = mongoose.model("Attendance", attendance);


const UserStats=new mongoose.model("UserStats" , userStats)
const User=new mongoose.model("User" , user)
const UserDetails=new mongoose.model("UserDetails" , userDetails)

module.exports={UserDetails , User , UserStats , Attendance}
