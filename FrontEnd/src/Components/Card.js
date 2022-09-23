
import React from 'react'
import Imag from "../images/img1.jpg"
import Image from "../images/img1.jpg";
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
export const Card = () => {
  return (
    <div>
        <div className="max-w-2xl mx-auto bg-white rounded-lg border mb-4 border-gray-200 shadow-md overflow-auto">
              <div className='flex justify-between items-center'>
                <button className='text-[#6E6E6E] px-2 py-4 flex gap-3 text-sm items-center'>
                    <img src={Image} alt="" className='rounded-full w-10 h-10 object-cover' />
                    <div>
                        <div className='text-black font-bold'>Walter White</div>
                        <div className='text-[12px] font-semibold text-left'>17 sept 2018</div>
                    </div>
                    
                </button>
                <MoreHorizSharpIcon className='mr-4'/>
              </div>
              <a href='/'>
                  <img className="w-full" src={Imag} alt=""/>
              </a>
              <div className="p-5">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  
                    <form>
                        <label for="chat" className="sr-only">Your message</label>
                        <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg ">
                            <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Upload image</span>
                            </button>
                            <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Add emoji</span>
                            </button>
                            <textarea id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Your message..."></textarea>
                                <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 ">
                                <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                                <span className="sr-only">Send message</span>
                            </button>
                        </div>
                    </form>


              </div>
          </div>
    </div>
  )
}
