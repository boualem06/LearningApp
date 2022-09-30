import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Conversation from './conversation';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../features/currentUser";
import Divider from '@material-ui/core/Divider';
const Navbarchat=()=>{
    const [own, setOwn] = useState(true);

    
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const [list, setList] = useState([])
    const [Listusers,setListusers]=useState([])
    useEffect(() => {
        let data = {};


        // get all the conversations of the current user
        const getConversation = async () => {

            //get the current user in order to get his conversations 
            let data = {};
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "accestoken": localStorage.getItem('jwt')
            }

            //

            let response = await fetch("http://localhost:5000/user/me", {
                method: "GET",
                headers: headersList
            });
            
            data = await response.json();
            console.log(data) ;
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
            setList(data);

        }

        const getUsers=async()=>{
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "accestoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmYzNWY5MWRlOWZmZGFkNzE1MWU5ZSIsImlhdCI6MTY2NDU1NjAyMSwiZXhwIjoxNjY3MTQ4MDIxfQ.lM0KvolzdTPvLIqopGY_NP1S4Wa6IDI-eyuYB7VomXc",
                "Content-Type": "application/json"
               }
               
              
               
               let response = await fetch("http://localhost:5000/user/all", { 
                 method: "GET",
                 headers: headersList
               });
               
               let data = await response.json();
               setListusers(data) ;
               console.log(data);
               
        }
        getUsers() ;
        getConversation();
    }, [])

    return(
        <div style={{ background: "white",color:'black', height: "100%", overflowY: "scroll" }} className="w-1/3  lg:w-1/5 text-white px-2  ">
        <div className='flex items-center my-6 px-4'>
            <TextField onChange={(e) => {}} className='mb-4' InputProps={{ style: { color: "black" } }} InputLabelProps={{ style: { color: "black" } }} placeholder="Search a user..." />
            <button className=' hover:bg-gray-700 hover:rounded'><SearchIcon></SearchIcon></button>
        </div>
        {list.map((ele) => (
            <Conversation user={user} key={ele._id} ele={ele}></Conversation>
        ))}
    <div className='bg-gray-400 border-solid border-black'>
    <Divider ></Divider>
    </div>
            
    </div>
    )
}

export default Navbarchat ;