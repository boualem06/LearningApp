import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import { Avatar } from '@material-ui/core';
import '../App.css';
import InputBase from '@material-ui/core/InputBase' ;

import {AttachFile,Image,Send} from '@material-ui/icons/'
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
        width:"100%"
    },
    file:{
        color:"gray"
    }
    ,
    send:{
        color:"white"
    }
}));

const Chat = () => {
    const classes = useStyles();
    const [own, setOwn] = useState(true);
    const [list, setList] = useState([
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        },
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }
        ,
        {
            name: "Hamroune Boualem",
            message: "Hello world",
            time: "09:08 AM"
        }



    ])
    return (
        <div style={{ height: "100vh", width: "100%" }} className="flex overflow-hidden">




            <div style={{ background: "#333352", height: "100%", overflowY: "scroll" }} className="w-1/3  lg:w-1/5 text-white px-2  ">
                <div className='flex items-center  px-4'>
                    <TextField onChange={(e) => { console.log(e.target.value) }} className={classes.search} InputProps={{ style: { color: "white" } }} InputLabelProps={{ style: { color: "white" } }} placeholder="Search a user..." />
                    <button className=' hover:bg-gray-700 hover:rounded'><SearchIcon></SearchIcon></button>
                </div>
                {list.map((ele) => (
                    <div className='hover:bg-gray-700 hover:rounded hover:cursor-pointer  flex items-center text-white mb-4'>
                        <Avatar className='mr-4'>
                            B
                        </Avatar>
                        <div>
                            <h1 className='text-white font-bld' > {ele.name} </h1>
                            <h1 className='text-sm text-gray-500'>{ele.message} </h1>
                        </div>
                    </div>
                ))}
            </div>






            <div style={{ background: "#cbcbe2", width: "100%", height: "100vh" }} className=" pt-2 flex flex-col-reverse">


                <div className='w-full bg-white h-12 border border-t-2 border-t-sky-500 flex items-center justify-between px-4'>

                    <InputBase onChange={(e) => { console.log(e.target.value) }} className={classes.message} placeholder="Type Something ..." />
                    <div className='flex '>
                       <button className='mr-3'><AttachFile className={classes.file} ></AttachFile></button> 
                        <button className='mr-3'><Image className={classes.file}></Image></button>
                         <button className='flex px-2 py-1 rounded items-center bg-blue-500 text-white font-bold'>send<Send className={classes.send}> </Send></button>
                        
                    </div>

                </div>


                <div style={{ width: "100%", marginBottom: 10 }} className={own ? " flex justify-end mr-2  " : "  ml-2 flex  justify-begin"}>
                    {own ?
                        <div className='flex mr-2'>

                            <h1 className={own ? "bg-blue-500 px-4 py-2 rounded-tl-lg rounded-br-lg rounded-bl-lg text-white" : "bg-white px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg "} >
                                hellllloooo how are you doing today!!!!!!!
                            </h1>
                            <Avatar className='ml-2'> B</Avatar>
                        </div>
                        : <div className='flex ml-2 '>
                            <div>
                                <Avatar className='mr-2'> B</Avatar>

                            </div>

                            <h1 className={own ? "bg-blue-500 px-4 py-2 rounded-tl-lg rounded-br-lg rounded-bl-lg text-white" : "bg-white px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg "} >
                                hellllloooo how are you doing today
                            </h1>

                        </div>
                    }

                </div>


                <div style={{ width: "100%", marginBottom: 10 }} className={!own ? "flex justify-end mr-2  " : " ml-2  flex  justify-begin"}>
                    {!own ?
                        <div className='flex '>

                            <h1 className={!own ? "bg-blue-500 px-4 py-2 rounded-tl-lg rounded-br-lg rounded-bl-lg text-white" : "bg-white px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg "} >
                                hellllloooo how are you doing today
                            </h1>
                            <Avatar className='ml-2'> B</Avatar>
                        </div>
                        : <div className='flex'>
                            <div>
                                <Avatar className='mr-2'> B</Avatar>

                            </div>

                            <h1 className={!own ? "bg-blue-500 px-4 py-2 rounded-tl-lg rounded-br-lg rounded-bl-lg text-white" : "bg-white px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg "} >
                                hellllloooo how are you doing today
                            </h1>

                        </div>
                    }
                </div>






            </div>
        </div>
    )
}
export default Chat