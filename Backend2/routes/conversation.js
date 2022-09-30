const express = require('express')
const router = express.Router();
const Conversation = require("../models/Conversation")
const Message = require("../models/Message")
router.post('/', async (req, res) => {
    const newConverstation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    })
    try {
        const savedConverstaion = await newConverstation.save();
        res.status(200).json(savedConverstaion);
    } catch (err) {
        res.status(500).json(err);
    }
})


// get conversation of a user
router.get("/:userId", async (req, res) => {
    try {
        const conversation = await Conversation.find({
            members: { $in: [req.params.userId] }
        })
        res.status(200).json(conversation)
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})



router.get("/twoUsers/:userId/:userId2", async (req, res) => {
    try {
        console.log("enterred");
        console.log(req.params.userId);
        console.log(req.params.userId2);
        
        const conversation = await Conversation.find({
            members: { $all: [req.params.userId, req.params.userId2] }
        })
        
        res.status(200).json(conversation)
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})





module.exports = router;