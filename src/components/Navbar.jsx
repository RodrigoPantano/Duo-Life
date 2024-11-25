import React from 'react'
import duoLife from '../assets/duo-life.svg'


const Navbar = () => {
  return (
    <>
      <nav className="navbar top-0 w-[100%]">
        <div className='border-b-2 border-indigo-400'>
            <img
              className='h-20 w-20 mx-auto text-gray-600 group-hover:text-indigo-600 -rotate-90 mb-2 cursor-pointer logo p-3'
              src={duoLife}
              alt="Logo"
            />
        </div>    
      </nav>
    </>
  );
};

export default Navbar;