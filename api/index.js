const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const cors = require("cors");

dotenv.config();



mongoose.connect('mongodb://localhost:27017/netflix',{useNewUrlParser: true, useUnifiedTopology: true,})
.then(()=>{
    console.log("DB connection successful")
})
.catch((err)=>{
    console.log(err);
})

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);


app.listen(8800,()=>{
    console.log("Backend server running at 8800")
})  