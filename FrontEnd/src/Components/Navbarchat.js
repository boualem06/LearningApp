import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Conversation from './conversation';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../features/currentUser";
const Navbarchat=()=>{
    const [own, setOwn] = useState(true);

    
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const [list, setList] = useState([])
    useEffect(() => {
        let data = {};


        // get all the conversations of the current user
        const getConversation = async () => {

            //get the current user in order to get his conversations 
            let data = {};
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "accestoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmYzNWY5MWRlOWZmZGFkNzE1MWU5ZSIsImlhdCI6MTY2NDE0Mjg0MiwiZXhwIjoxNjY2NzM0ODQyfQ.88Z3z15PX_OT7NIobw1lAry7_QwjT5rOr2Y7oOnBBAg"
            }

            let response = await fetch("http://localhost:5000/user/me", {
                method: "GET",
                headers: headersList
            });

            data = await response.json();
            console.log(data.id)
            dispatch(setCurrentUser(data)) ;
            setUser(data);



            //get the conversations of  the current user 
            headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
            }

            response = await fetch(`http://localhost:5000/conversation/${data.id}`, {
                method: "GET",
                headers: headersList
            });
            data = await response.json();
            console.log(data);
            setList(data);

        }


        getConversation();
    }, [])

    return(
        <div style={{ background: "#333352", height: "100%", overflowY: "scroll" }} className="w-1/3  lg:w-1/5 text-white px-2  ">
        <div className='flex items-center my-6 px-4'>
            <TextField onChange={(e) => { console.log(e.target.value) }} className='mb-4' InputProps={{ style: { color: "white" } }} InputLabelProps={{ style: { color: "white" } }} placeholder="Search a user..." />
            <button className=' hover:bg-gray-700 hover:rounded'><SearchIcon></SearchIcon></button>
        </div>
        {list.map((ele) => (
            <Conversation user={user} key={ele._id} ele={ele}></Conversation>
        ))}
    </div>
    )
}

export default Navbarchat ;