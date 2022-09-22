const express = require('express')
const router = express.Router();
require("dotenv").config();
const userControllers=require('../Controllers/userControllers')
const User=require('../models/userModel')
const {protect}=require('../midleware/authmidleware')

router.post("/register",userControllers.registerUser) ;
router.post('/login',userControllers.loginUser) ;
router.get('/me',protect,userControllers.me)
module.exports=router ;

