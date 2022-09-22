const User=require('../models/userModel')
const jwt=require('jsonwebtoken') ;
const bcrypt=require('bcryptjs') ;
require("dotenv").config();
// const asyncHandler=require('express-async-handler') ;
const registerUser=async(req,res)=>{
    const {name,email,password}=req.body ;
    if(!name || !email || !password){
        res.status(400) ;
        res.json( {message:"please add all fields",status:400})
        return ;
    }

    //check if user existe 
    const userExist=await User.findOne({email}) ;
    if(userExist)
    {
        res.status(400) ;
        res.json({message:'user already exist',status:400})
        return ;
    }

    //Hash password 
    const salt=await bcrypt.genSalt(10) ;
    const hashedPassword=await bcrypt.hash(password,salt) ;

    //create User
    const user=await User.create({
        name,
        email,
        password:hashedPassword
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            status:201,
            token:generateToken(user.id)
        })
    }
    else{
        res.status(400) ;
        res.json({message:'invalid user data ',status:400})
        // throw new Error('invalid user data ')
    }
}





const loginUser=async (req,res)=>{
    const {email,password}=req.body ;

    // check for user email 
    const user=await User.findOne({email}) ;
    if(user && (await bcrypt.compare(password,user.password)))
    {
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            status:201,
            token:generateToken(user.id)
        })
    }else
    {
        res.status(400) ;
        res.json({message:'Invalide credentials',status:400})
        // throw new Error('Invalide credentials')
    }
}

// Generate Token

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d',
    })
}



//get the actuell user
const me=async (req,res)=>{
    const {_id,name,email}=await User.findById(req.user.id) ;
    res.status(200).json({
        id:_id,
        name,
        email
    })
} 


module.exports={
    registerUser,
    loginUser,
    me
    
}
