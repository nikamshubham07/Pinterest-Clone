import React from 'react'
import logo from '../images/logo.jpeg'

const Navbar = () => {
  return (
    <>
       <div className='navbar flex items-center h-[80px] px-[30px]'>
          <img className='w-[45px]' src={logo} alt="" />
          <p className='ml-1'><span className='ml-2'>Pinterest</span></p>
          <div className='btns ml-7 flex items-center gap-[20px]'>
            <button>Today</button>
            <button>Watch</button>
            <button className=''>Explore</button>
          </div>
       </div>
    </>
  )
}

export default Navbar
