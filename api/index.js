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

const PORT = process.env.PORT || 8800;
const MONGO_KEY = process.env.MONGO_KEY;

mongoose.connect(`${MONGO_KEY}/netflix`, { useNewUrlParser: true, useUnifiedTopology: true })

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


app.listen(PORT,()=>{
    console.log("Backend server running at 8800")
})  

app.get('/', (req, res) => {
  res.status(200).send('Server live');
});
