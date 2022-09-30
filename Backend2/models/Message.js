const  mongoose  = require('mongoose') ;
const Schema=mongoose.Schema  ;
const MessageSchema=new Schema({
  ConversationId:{
    type:String
  },
  sender:{
    type:String
  },
  text:{
    type:String
  }
},{timestamps:true})

const Message=mongoose.model('Message',MessageSchema) ;
module.exports=Message ;


