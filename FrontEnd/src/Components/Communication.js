import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import Onemessage from './onemessage';
import { useSelector } from "react-redux";
import { AttachFile, Image, Send } from '@material-ui/icons/'
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            //   width: '25ch',
        },
    },
    search: {
        marginBottom: 10,
        marginTop: 10,
        padding: 6,
        color: "white",
        width: "100%"
    }
    ,
    message: {
        padding: 2,
        width: "100%"
    },
    file: {
        color: "gray"
    }
    ,
    send: {
        color: "white",

    }
}));

const Communication = () => {
    const [message, setMessage] = useState("");
    // const [socket,setSocket]=useState(null) ;
    const conversation = useSelector((state) => state.conversation.value);
    const currentuser = useSelector((state) => state.currentuser.value);
    const [listMessages, setListMessages] = useState([]);
    const [arrivalMessage,SetArrivalMessage]=useState({}) ;
    const socket = useRef();
    const scrollref = useRef();
 
 
    useEffect(() => {
        const getMessages = async () => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
            }

            let response = await fetch("http://localhost:5000/messages/" + conversation._id, {
                method: "GET",
                headers: headersList
            });

            let data = await response.json();
            setListMessages(data);
        }
        getMessages();

    }, [conversation])



    const sendMessage = async () => {

        const receiverId = await conversation.members.find(member => member !== currentuser.id);

        socket.current.emit("addUser", receiverId);

        socket.current.emit("sendMessage", {
            senderId: currentuser.id,
            receiverId,
            text: message
        })

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({

            "ConversationId": conversation._id,
            "sender": currentuser.id,
            "text": message

        }
        );

        let response = await fetch("http://localhost:5000/messages", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.json();
        setListMessages([...listMessages, data])
    }



    useEffect(() => {
        socket.current = io("ws://localhost:8900")
        socket.current.on("getMessage", data => { 
            SetArrivalMessage({
                sender:data.senderId,
                text:data.text
              
            })
          })

    }, [conversation])

    useEffect(()=>{
        arrivalMessage && conversation?.members.includes(arrivalMessage.sender);
        setListMessages(prev=>[...prev,arrivalMessage])
    },[arrivalMessage,conversation])

    useEffect(() => {
       
        socket.current.emit("addUser", currentuser.id);

        socket.current.on('getUsers', users => {
            
        })
       
    }, [currentuser])

    useEffect(() => {
        scrollref.current?.scrollIntoView({ behavior: "smooth" })
    }, [listMessages])





   

    const classes = useStyles();
    return (

        <div style={{ background: "#cbcbe2", width: "100%", height: "100vh" }} className=" pt-2 flex flex-col justify-between   ">

            {/* {conversation ? <div> {conversation.members[0]} </div>  : <div>Not yet  </div>} */}
            <div style={{ height: "100%" }} className="overflow-y-scroll">
                {listMessages.map((ele, index) => (
                    <div ref={scrollref}>
                        <Onemessage key={index} text={ele.text} own={ele.sender === currentuser.id ? true : false}></Onemessage>
                    </div>

                ))}
            </div>


            <div className=' w-full bg-white h-12 border border-t-2 border-t-sky-500 flex items-center justify-between px-4'>

                <InputBase value={message} onChange={(e) => { setMessage(e.target.value) }} className={classes.message} placeholder="Type Something ..." />
                <div className='flex '>
                    <button className='mr-3'><AttachFile className={classes.file} ></AttachFile></button>
                    <button className='mr-3'><Image className={classes.file}></Image></button>
                    <button onClick={() => { sendMessage(); setMessage('') }} className='flex px-2 py-1 rounded items-center bg-blue-500 text-white font-bold'><span className='mr-2'>SEND</span><Send className={classes.send}> </Send></button>

                </div>

            </div>




        </div>
    )
}

export default Communication;