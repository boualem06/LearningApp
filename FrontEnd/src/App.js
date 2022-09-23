


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { SideBar } from "./Components/SideBar";
import Navbar from "./Components/Navbarr"
import Messages from "./Components/Messages"
import { Quest } from "./Components/Quest";
function App() {

  return (
   <div className="flex">
      <SideBar/>
      <div className="flex-[7] bg-[#E3F2FD]">
        <Navbar/>
        <div className="flex w-full p-4">
          <Quest/>
          <div className="hidden md:block sticky top-20 h-[85vh] flex-[1] ">
            <Messages/>
          </div>
        </div>
      </div>
   </div>

  )
}




export default App;
