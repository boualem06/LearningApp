import { Avatar } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { setConversation } from "../features/ConversationSlice";
const Conversation = ({ele,user}) => {
    const [receiver,setreceiver]=useState({}) ;
    const dispatch = useDispatch();
    useEffect(() => {
       
        let receiver2= ele.members[1]===user.id  ? ele.members[0] : ele.members[1] ;
        
        // getting the receiver using his ID which is in the conversation(ele)
         const getreceiver = async () => {
            
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
               }
               
               let response = await fetch("http://localhost:5000/user/"+receiver2, { 
                 method: "GET",
                 headers: headersList
               });
               
               let data = await response.json();
               setreceiver(data) ;

        }
        getreceiver() ;

    }, [])


    

// get the conversation of the current user  with the user where we clicked   ;
 
    return (
        <div onClick={()=>{dispatch(setConversation(ele));}} className=" px-[7.5px] flex flex-col xl:flex-row items-center xl:gap-[20px] cursor-pointer py-4 hover:bg-gray-100">
            <Avatar className='mr-4'>
                {receiver[0]}
            </Avatar>
            <div>
                <h1 className='font-bold' > {receiver.name} </h1>
                <h1 className='text-sm'>{ele.message} </h1>
            </div>
        </div>
    )

}

export default Conversation;