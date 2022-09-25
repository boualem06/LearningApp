const express = require('express')
const router = express.Router();
const Message=require("../models/Message")

router.post('/',async (req,res)=>{
    const newMessage=new Message(req.body)
    try{
        const savedMessage=await newMessage.save() ;
        res.status(200).json(savedMessage) ;
    }catch(err){
        res.status(500).json(err) ;
    }
})


router.get("/:ConversationId",async (req,res)=>{
    try{

        const messages=await Message.find({
            ConversationId:req.params.ConversationId,
        }) ;
        res.status(200).json(messages) ;
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports=router ;