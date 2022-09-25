const { response } = require('express');
const jwt=require('jsonwebtoken')
const User=require('../models/userModel')

const protect=async(req,res,next)=>{
    let token  ;
    if(req.headers)
    {
        
        try{
            //get token from header 
            // token=req.headers.authorization.split(' ')[1]
            token=req.headers.accestoken ;
            //verify the token 
            const decoded=jwt.verify(token,process.env.JWT_SECRET) 
            //get user from the token 
            req.user=await User.findById(decoded.id).select('-password')
            next() ;
        }catch(err){
            console.log(err) ;
            res.status(401) ;
            res.json({message:'Not authorized',status:401})
        }
    } 

    if(!token)
    {
        res.status(401) ;

        res.json({message:'Not authorized,no token',status:401})
    }

   
}

module.exports={protect} ;