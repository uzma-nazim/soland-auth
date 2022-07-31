const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Local Variables...
const app = express();
const PORT = 5000;


// Router's Connectivity... 
const router = require("./routes/routes");


// Front-end to Back-end Communication...
app.use(cors());



//Allow Body | Otherwise body return undefined...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Database Connectivity...
mongoose.connect("mongodb+srv://soland:soland@cluster0.ydhqm4w.mongodb.net/soland");
mongoose.connection.on("connected", () => console.log("Database is Connected"));
mongoose.connection.on("error", (err) => console.log(err));


// All Routes | API's...
app.use(router);


// Server Listening
app.listen(PORT, () => console.log(`Server is running on localhost : ${PORT}`));