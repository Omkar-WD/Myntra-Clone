const express=require("express");

const router=express.Router();

const Address= require("../model/addressmodel")


router.get("", async(req,res)=>{
  try{
       const address= await Address.find().lean().exec();
       return res.send(address)
  }
  catch(e){
    return res.status(500).send(e.message)
  }

})

router.post("", async(req,res)=>{
    try{
         const address= await Address.create(req.body)
         return res.send(address)
    }
    catch(e){
      return res.status(500).send(e.message)
    }
  
  })

  router.get("/:id", async(req,res)=>{
    try{
         const address= await Address.findById(req.params.id).lean().exec();
         return res.send(address)
    }
    catch(e){
      return res.status(500).send(e.message)
    }
  
  })

  router.patch("/:id", async(req,res)=>{
    try{
         const address= await Address.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
         return res.send(address)
    }
    catch(e){
      return res.status(500).send(e.message)
    }
  
  })

  router.delete("/:id", async(req,res)=>{
    try{
         const address= await Address.findByIdAndDelete(req.params.id).lean().exec();
         return res.send(address)
    }
    catch(e){
      return res.status(500).send(e.message)
    }
  
  })


  module.exports=router;