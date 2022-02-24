const express= require("express");

const app= express();


var cors = require('cors')
 
app.use(cors())


const connect=require("./config/db");

const addressSchema= require("./controller/addresscontroller")

app.use(express.json());

app.use("/address", addressSchema);


app.listen(2345, async()=>{
   try{
     await connect();
     console.log("port is redy")
   }
   catch(e){
    console.log(e.message)
   }
})

