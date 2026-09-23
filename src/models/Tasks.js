
const mongoose=require("mongoose")

const task=new mongoose.Schema({

    name:String,
    description:String,
    about:String,
    number:Number,
    domain:String,

    isActive:Boolean,

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    resources:{
        type:[String],
    },

    outcomes:{
        type:[String]
    },

    topics:{
        type:[String]
    },

    level:{
        type:String,
        enum:['basic' , 'intermediate' , 'advance']
    },

    priority:{
        type:String,
        enum:['low' , 'high' , 'mid']
    },

    deadline:{
        type:Date
    },

    start:Date


    },

    {
        timestamps:true
    }

)

const Task=mongoose.model("Task" ,task)

module.exports=Task