const express = require('express')
const { default: mongoose } = require('mongoose')
const UserRoutes = require("./routes/UserRoutes") ;
const conversationRoutes=require('./routes/conversation')
const messageRoutes=require('./routes/messages')
const app = express()
const cors = require("cors");
require("dotenv").config();

const port = 5000
// const dbURI = "mongodb+srv://Boualem:boualemhamroune1649@blogs.xwwjje4.mongodb.net/?retryWrites=true&w=majority"
const dbURI="mongodb://Boualem:boualemhamroune1649@ac-5kr3may-shard-00-00.palryrg.mongodb.net:27017,ac-5kr3may-shard-00-01.palryrg.mongodb.net:27017,ac-5kr3may-shard-00-02.palryrg.mongodb.net:27017/?ssl=true&replicaSet=atlas-cs2cfm-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => { console.log("connected to db"); app.listen(port); })
  .catch((err) => { console.log(err) });

app.use(cors())
app.use(express.json({ limit: "1mb" }));
app.use(express.static('public'));
app.use("/user",UserRoutes);
app.use("/conversation",conversationRoutes) ;
app.use("/messages",messageRoutes) ;

 
  


