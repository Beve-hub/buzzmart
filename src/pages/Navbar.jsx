import React,{useState} from 'react'
import IMG from '../images/logo.png'
import { MdCloudDownload } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
    const [text,setText] = useState('')
  return (
    <div className='w-full flex justify-between items-center px-10 py-4 bg-[#2E6E65]'>
      <img src={IMG} alt='' className='w-[10rem]'/>
      <div className='flex items-center gap-6 sm:flex hidden'>
        <input type='text' placeholder='search' value={text} onChange={(e) => setText(e.target.value)} className="block w-full rounded-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
      <div className='flex items-center gap-6 text-[white] sm:flex hidden '>
       <MdCloudDownload className='font-lg'/>
       <IoNotifications className='font-lg'/>
       <p>Login</p>
      </div>
    </div>
  )
}

export default Navbar
