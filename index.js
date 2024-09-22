const express = require("express");
const app= express();


require("dotenv").config();
const PORT = process.env.PORT || 5001;

 app.use(express.json());

 require("./config/database").connect();

 //route

 const  user = require("./route/user");
 app.use("/api/v1", user);

 app.listen(PORT, ()=>{
    console.log(`app is running successfully ${PORT}`);
 });