import React from 'react'
import { link } from '../data';
import { NavLink} from 'react-router-dom';

const SideNav = () => {
  return (
    <div className='w-[200px] h-full  border-b-2 border-[#B2B2B2] justify-between items-center py-4 gap-2 sm:flex hidden'>
      <ul className='  py-6 px-12  items-center gap-14 md:grid hidden text-md  '>
        {link.map(({name,path,icon},index) => {
          return (
            <li key={index}  >
                <NavLink to={path} className='flex items-center  gap-2' >
                    <p className='text-xl'>{icon}</p>
                    <p className='text-md'>{name}</p>
                </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default SideNav
