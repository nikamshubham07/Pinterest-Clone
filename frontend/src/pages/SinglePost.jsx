import React from 'react'
import Navbar from '../components/Navbar'
import { HiDotsHorizontal } from "react-icons/hi";
import { LuUpload } from "react-icons/lu";
import Avatar from 'react-avatar';

const SinglePost = () => {
  return (
    <>
       <Navbar/>
       <div className='px-[200px] min-h-[80vh] mt-4 mb-5 flex'>
         <div className='w-[35%] h-[80%]'>
            <img className='w-full h-full object-cover rounded-[20px]' src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" alt="" />
         </div>
         <div className='right w-[50%] p-[12px] min-h-full ml-5 rounded-[20px]'>
            <div className='flex justify-between items-center gap-5'>
                <div className='flex items-center gap-4'>
                    <i className='font-[500] text-[30px] cursor-pointer'><HiDotsHorizontal/></i>
                    <i className='font-[500] text-[28px] cursor-pointer'><LuUpload/></i>
                </div>
                <button className='btnNormal !bg-[#E60023] text-white'>Save</button>
            </div>
            <h3 className='text-3xl mt-5 font-[500]'>
                Valentine Gift
            </h3>
            <p className='mt-4 text-[16px] text-[gray]'>
                Get the Valentine gift for your special one.
            </p>
            <div className='flex items-start gap-3 mt-4'>
                <img className='w-[50px] h-[50px] rounded-[50%] object-cover cursor-pointer' src="https://i.pinimg.com/280x280_RS/1f/f0/79/1ff0796aed7fe27aa9d40d6d35c36bae.jpg" alt="" />
                <div>
                    <p className='font-[500]'>Tommy Santiago</p>
                    <p className='text-[14px] text-[gray]'>807 followers</p>
                </div>
            </div>
            <h3 className='text-xl font-[500] mt-4'>7 Comments</h3>
            <div className='comments pt-4'>
                <div className='comment flex items-start gap-3 mb-2'>
                    <Avatar name="shubham nikam" size="30" round="50%" className='cursor-pointer'/>
                    <p><b>Mary</b> Love your idea. Made one with the legs and ornaments, thank you,so cute. Love your idea. Made one with the legs and ornaments, thank you,so cute.</p>
                </div>
                <div className='comment flex items-start gap-3 mb-2'>
                    <Avatar name="Dipak Nikam" size="30" round="50%" className='cursor-pointer'/>
                    <p><b>Diapk</b> Love your idea. Made one with. Love your idea. Made one with the legs and ornaments, thank you,so cute.</p>
                </div>
                <div className='comment flex items-start gap-3 mb-2'>
                    <Avatar name="S J" size="30" round="50%" className='cursor-pointer'/>
                    <p><b>Sagar</b> ornaments, thank you,so cute. Love your idea. Made one with the legs and ornaments, thank you,so cute.</p>
                </div>
                <div className='comment flex items-start gap-3 mb-2'>
                    <Avatar name="phubham Sikam" size="30" round="50%" className='cursor-pointer'/>
                    <p><b>Sandesh</b> Love your idea. Made one with the legs and ornaments, thank you,so cute. Love your idea.</p>
                </div>
            </div>
         </div>
       </div>
    </>
  )
}

export default SinglePost
