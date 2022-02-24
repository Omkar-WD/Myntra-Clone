
const mongoose= require("mongoose");

const addressSchema = new mongoose.Schema({
   name:{type:String},
   mobileNo:{type:Number},
   pincode:{type:String},
   address:{type:String},
   town:{type:String},
   city:{type:String},
   state:{type:String}

})
const Address= mongoose.model("address",addressSchema)
module.exports=Address;