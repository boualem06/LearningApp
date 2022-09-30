const express = require('express')
const router = express.Router();
const Message=require("../models/Message")

//post a new message 
router.post('/',async (req,res)=>{
    const newMessage=new Message(req.body)
    try{
        const savedMessage=await newMessage.save() ;
        res.status(200).json(savedMessage) ;
    }catch(err){
        res.status(500).json(err) ;
    }
})

//get the messages of a specifique conversation
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