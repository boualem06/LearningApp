

import React from 'react'
import Logo from "../images/logo.svg";
import Image from "../images/img1.jpg";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
export const SideBar = () => {
  return (
    <div className='flex-1 hidden xl:block h-[100vh] sticky top-0 overflow-hidden '>
        <div className='flex flex-col justify-between h-full' >
          <div className='px-[18px] py-[26px]'>
              <div className='flex gap-[5px] items-center mb-[25px]'>
                  <img src={Logo} alt="LOGO" className='w-[25px]' />
                  <div className='font-bold text-[14px]'>Learning</div>
              </div>
              <div className='text-[#6E6E6E] px-[7.5px] flex items-center gap-[20px] cursor-pointer py-2 rounded mb-2 '>
                <HomeRoundedIcon/>
                Home
              </div>
              <div className=' px-[7.5px] flex items-center gap-[20px] cursor-pointer py-2 rounded mb-2 bg-gray-100'>
                <LibraryBooksOutlinedIcon/>
                Courses
              </div>
              <div className='text-[#6E6E6E] px-[7.5px] flex items-center gap-[20px] cursor-pointer mb-4'>
                <HelpOutlineIcon/>
                Exercices
              </div>
              <div className='text-[#6E6E6E] px-[7.5px] flex items-center gap-[20px] cursor-pointer mb-4'>
                <AssignmentTurnedInOutlinedIcon/>
                Solution
              </div>
              <div className='text-[#6E6E6E] px-[7.5px] flex items-center gap-[20px] cursor-pointer mb-4'>
                <QuestionAnswerOutlinedIcon/>
                Messages
              </div>
              <div className='text-[#6E6E6E] px-[7.5px] flex items-center gap-[20px] cursor-pointer mb-4'>
                <CalendarTodayOutlinedIcon/>
                Calendar
              </div>
          </div>
          <div>
            <hr />
            <button className='text-[#6E6E6E] px-2 py-4 flex gap-3 text-sm items-center'>
              <img src={Image} alt="" className='rounded-full w-10 h-10 object-cover' />
              <div>
                <div className='text-black font-bold'>Walter White</div>
                <div className='text-[14px]'>View profile</div>
              </div>
            </button>
          </div>
        </div>
    </div>
  )
}
