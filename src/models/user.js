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

    profile:String

})


const User=new mongoose.model("User" , user)
const UserDetails=new mongoose.model("UserDetails" , userDetails)

module.exports={UserDetails , User}
