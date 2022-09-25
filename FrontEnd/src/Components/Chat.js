import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import '../App.css';
import InputBase from '@material-ui/core/InputBase';
import Onemessage from './onemessage';
import { AttachFile, Image, Send } from '@material-ui/icons/'
import Conversation from './conversation';
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
        color: "white"
    }
}));

const Chat = () => {
    const classes = useStyles();
    const [own, setOwn] = useState(true);
    const [user, setUser] = useState({});
    const [list, setList] = useState([])
    useEffect(() => {
        //getting the actuel user 
        const getActueluser = async () => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "accestoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmYzNWY5MWRlOWZmZGFkNzE1MWU5ZSIsImlhdCI6MTY2NDE0Mjg0MiwiZXhwIjoxNjY2NzM0ODQyfQ.88Z3z15PX_OT7NIobw1lAry7_QwjT5rOr2Y7oOnBBAg"
            }

            let response = await fetch("http://localhost:5000/user/me", {
                method: "GET",
                headers: headersList
            });

            let data = await response.json();
            console.log(data.id)
            setUser(data);

        }

        // get all the conversations of the current user
        const getConversation = async () => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
            }

            let response = await fetch("http://localhost:5000/conversation/" + user.id, {
                method: "GET",
                headers: headersList
            });
            let data = await response.json();
            console.log(data);
            setList(data);

        }

        getActueluser();
        getConversation();
    }, [])
    return (
        <div style={{ height: "100vh", width: "100%" }} className="flex ">




            <div style={{ background: "#333352", height: "100%", overflowY: "scroll" }} className="w-1/3  lg:w-1/5 text-white px-2  ">
                <div className='flex items-center  px-4'>
                    <TextField onChange={(e) => { console.log(e.target.value) }} className={classes.search} InputProps={{ style: { color: "white" } }} InputLabelProps={{ style: { color: "white" } }} placeholder="Search a user..." />
                    <button className=' hover:bg-gray-700 hover:rounded'><SearchIcon></SearchIcon></button>
                </div>
                {list.map((ele) => (
                    <Conversation key={ele._id} ele={ele}></Conversation>
                ))}
            </div>


            <div style={{ background: "#cbcbe2", width: "100%", height: "100vh" }} className=" pt-2 flex flex-col overflow-y-scroll overflow-x-hidden ">
                <Onemessage own={true}></Onemessage>
                <Onemessage own={false}></Onemessage>

                <div className=' w-full bg-white h-12 border border-t-2 border-t-sky-500 flex items-center justify-between px-4'>

                    <InputBase onChange={(e) => { console.log(e.target.value) }} className={classes.message} placeholder="Type Something ..." />
                    <div className='flex '>
                        <button className='mr-3'><AttachFile className={classes.file} ></AttachFile></button>
                        <button className='mr-3'><Image className={classes.file}></Image></button>
                        <button className='flex px-2 py-1 rounded items-center bg-blue-500 text-white font-bold'>send<Send className={classes.send}> </Send></button>

                    </div>

                </div>



            </div>
        </div>
    )
}
export default Chat