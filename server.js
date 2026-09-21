const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express();


app.use(express.json());


//const cookieParser = require("cookie-parser");

//app.use(cookieParser())

const http=require("http")


const server=http.createServer(app)


app.get("/", (req, res) => {
    res.send("Server is running");
});


const PORT = process.env.PORT || 5000;

const startServer = async () => {
    //await connectDB();

    //await connectRedis();

    function startIt(){
        console.log(`Server running on port ${PORT}`);
    }

    // after success, the 2nd argument function will run
    server.listen(PORT, startIt);
};

startServer();