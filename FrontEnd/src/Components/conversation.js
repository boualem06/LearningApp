import { Avatar } from '@material-ui/core';
import { useEffect, useState } from 'react';
const Conversation = ({ele}) => {
    const [receiver,setreceiver]=useState({}) ;
    useEffect(() => {

       
        // getting the receiver using his ID which is in the conversation(ele)
         const getreceiver = async () => {
            
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
               }
               
               let response = await fetch("http://localhost:5000/user/"+(ele.members)[1], { 
                 method: "GET",
                 headers: headersList
               });
               
               let data = await response.json();
               setreceiver(data) ;
               console.log(data);

        }
        getreceiver() ;

    }, [])
    return (
        <div className='hover:bg-gray-700 hover:rounded hover:cursor-pointer  flex items-center text-white mb-4'>
            <Avatar className='mr-4'>
                {receiver[0]}
            </Avatar>
            <div>
                <h1 className='text-white font-bld' > {receiver.name} </h1>
                <h1 className='text-sm text-gray-500'>{ele.message} </h1>
            </div>
        </div>
    )

}

export default Conversation;