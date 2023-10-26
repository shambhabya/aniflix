const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const authRoute = require("./routes/auth");

dotenv.config();


mongoose.connect('mongodb://localhost:27017/netflix',{useNewUrlParser: true, useUnifiedTopology: true,})
.then(()=>{
    console.log("DB connection successful")
})
.catch((err)=>{
    console.log(err);
})

app.use(express.json());

app.use("/api/auth", authRoute);


app.listen(8800,()=>{
    console.log("Backend server running")
})  