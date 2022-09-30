import React from "react";
import Logo from "../images/logo.svg";
import Image from "../images/img1.jpg";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
export const SideBar = () => {
  const sideIcon =
    " px-[7.5px] flex flex-col xl:flex-row items-center xl:gap-[20px] cursor-pointer py-4 hover:bg-gray-100";
  return (
    <div className="flex-1 hidden lg:block h-[100vh] sticky top-0 overflow-hidden ">
      <div className="flex flex-col justify-between h-full">
        <div className="py-[26px]">
          <div className="px-[18px] flex gap-[5px] items-center mb-[25px]">
            <img src={Logo} alt="LOGO" className="w-[25px]" />
            <div className="font-bold text-[14px]">Learning</div>
          </div>
          <div className="grid grid-row-6 h-[100%]">
            <div className={sideIcon + " bg-gray-100"}>
              <HomeRoundedIcon fontSize="large" />
                Home
            </div>
            <div className={sideIcon}>
              <LibraryBooksOutlinedIcon fontSize="large" />
              Courses
            </div>
            <div className={sideIcon}>
              <HelpOutlineIcon fontSize="large" />
              Exercices
            </div>
            <div className={sideIcon}>
              <AssignmentTurnedInOutlinedIcon fontSize="large" />
              Solution
            </div>
            <div className={sideIcon}>
              <QuestionAnswerOutlinedIcon fontSize="large" />
              Messages
            </div>
            <div className={sideIcon}>
              <CalendarTodayOutlinedIcon fontSize="large" />
              Calendar
            </div>
          </div>
        </div>
        <div>
          <hr />
          <button className="text-[#6E6E6E] px-2 py-4 flex gap-3 text-sm items-center">
            <img
              src={Image}
              alt=""
              className="rounded-full w-10 h-10 object-cover"
            />
            <div>
              <div className="text-black font-bold">Walter White</div>
              <div className="text-[14px]">View profile</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
