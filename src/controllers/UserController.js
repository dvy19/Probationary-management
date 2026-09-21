
const {UserDetails , User}=require('../models/user')


const bcrypt=require("bcrypt")

const jwt=require("jsonwebtoken")


const login=async(req,res)=>{

    try{

        const email=req.body.email;
        const  password=req.body.password;
        
        const user = await User.findOne({ email });

        console.log("Email received:", email);
        console.log("User found:", !!user);

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Compare password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        console.log("Password correct:", isPasswordCorrect);

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }


        const accessToken = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        );

        // Store token in HTTP-only cookie
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: false, // true in production with HTTPS
            sameSite: "lax",
            maxAge: 15 * 60 * 1000
        });



            
        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                role: user.role,
                email: user.email,
            },
            token:accessToken

        });

    } 
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
};

module.exports=login
