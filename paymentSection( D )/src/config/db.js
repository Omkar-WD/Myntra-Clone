
const mongoose= require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://omkar:omkar@cluster0.xxd60.mongodb.net/myntraClone?retryWrites=true&w=majority")
}

module.exports=connect;