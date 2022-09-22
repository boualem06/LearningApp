


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { SideBar } from "./Components/SideBar";
import Navbar from "./Components/Navbarr"
import Messages from "./Components/Messages"
function App() {

  return (
   <div className="flex">
      <SideBar></SideBar>
      <div className="flex-[7] bg-[#E3F2FD]">
        <Navbar/>
        <Messages/>
      </div>
   </div>

  )
}




export default App;
