const  mongoose  = require('mongoose') ;
const Schema=mongoose.Schema  ;
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,'please add a name']
    },
    email:{
        type:String,
        required:[true,'please add an email']
    },
    password:{
        type:String,
        required:[true,'please add a password']
    },

},{timestamps:true})

const User=mongoose.model('User',userSchema) ;
module.exports=User ;