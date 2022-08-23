const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
require('dotenv').config()
const cors = require("cors");

// Local Variables...
const app = express();
const PORT = process.env.PORT || 5000;

//for cookie
app.use(cookieParser());

// Router's Connectivity... 
const router = require("./routes/routes");


// Front-end to Back-end Communication...
app.use(cors());



//Allow Body | Otherwise body return undefined...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Database Connectivity...
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("connected", () => console.log("Database is Connected"));
mongoose.connection.on("error", (err) => console.log(err));


// All Routes | API's...

app.use(router);
app.get("/home" , (req, res)=>{
    res.send("home")

})


// Server Listening
app.listen(PORT, () => console.log(`Server is running on localhost : ${PORT}`));