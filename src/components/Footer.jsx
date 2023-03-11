import React from 'react'

const Footer = () => {
  return (
    <div className='grow flex justify-center items-end'>
      <div className='relative z-10 text-center w-screen text-white'>
      <footer className="p-4 backdrop-blur-md shadow border-t border-slate-400 mt-5 flex flex-col items-center md:flex-row  md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center">© {new Date().getFullYear()} Selim. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
          <li>
            <span className="mr-4 hover:underline md:mr-6 cursor-pointer ">About</span>
          </li>
          <li>
            <span className="mr-4 hover:underline md:mr-6 cursor-pointer">Privacy Policy</span>
          </li>
          <li>
            <span className="mr-4 hover:underline md:mr-6 cursor-pointer">Licensing</span>
          </li>
          <li>
            <span className="hover:underline cursor-pointer">Contact</span>
          </li>
        </ul>
      </footer>
      </div>
    </div>
  )
}

export default Footer