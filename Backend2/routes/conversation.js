const express = require('express')
const router = express.Router();
const Conversation=require("../models/Conversation")

router.post('/',async (req,res)=>{
    const newConverstation=new Conversation({
        members:[req.body.senderId,req.body.receiverId]
    })
    try{
        const savedConverstaion=await newConverstation.save() ;
        res.status(200).json(savedConverstaion) ;
    }catch(err){
        res.status(500).json(err) ;
    }
})


// get conversation of a user
router.get("/:userId",async(req,res)=>{
    try{
        console.log("enterred")
        const conversation =await Conversation.find({
            members:{$in:[req.params.userId]}
        })
        res.status(200).json(conversation)
    }
    catch(err){
        console.log(err) ;
        res.status(500).json(err) ;
    }
})


module.exports=router ;