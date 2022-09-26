

import { useEffect, useState } from 'react';
import Communication from './Communication';
import { Avatar } from '@material-ui/core';
import '../App.css';


import Conversation from './conversation';
import Navbarchat from './Navbarchat';

const Chat = () => {
    // const classes = useStyles();
    const [own, setOwn] = useState(true);
    const [user, setUser] = useState({});
    const [list, setList] = useState([])
    
    return (
        <div style={{ height: "100vh", width: "100%" }} className="flex ">




            {/* <div style={{ background: "#333352", height: "100%", overflowY: "scroll" }} className="w-1/3  lg:w-1/5 text-white px-2  ">
                <div className='flex items-center my-6 px-4'>
                    <TextField onChange={(e) => { console.log(e.target.value) }} className='mb-4' InputProps={{ style: { color: "white" } }} InputLabelProps={{ style: { color: "white" } }} placeholder="Search a user..." />
                    <button className=' hover:bg-gray-700 hover:rounded'><SearchIcon></SearchIcon></button>
                </div>
                {list.map((ele) => (
                    <Conversation user={user} key={ele._id} ele={ele}></Conversation>
                ))}
            </div> */}
            <Navbarchat></Navbarchat>
            <Communication></Communication>
        </div>
    )
}
export default Chat