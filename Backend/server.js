const express = require('express')
const { default: mongoose } = require('mongoose')

const UserRoutes = require("./routes/UserRoutes")
const app = express()
const cors = require("cors");
require("dotenv").config();

const port = 5000
// const dbURI = "le lien de la base de donne"


//mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//  .then((result) => { console.log("connected to db"); app.listen(port); })
  //.catch((err) => { console.log(err) });

//app.use(cors())
//app.use(express.json({ limit: "1mb" }));
//app.use(express.static('public'));
//app.use(UserRoutes);

 
  
// )


