const express =  require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();


//middleware

app.use(express.json())
app.use(cors());

//ROUTES
//register and login routes

app.use("/auth",require("./routes/jwtAuth"));
app.use("/dashboard",require("./routes/dashboard"));
app.listen(5000,() =>{
    console.log("Server is running at port 5000");
});
