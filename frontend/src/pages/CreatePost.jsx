import React from 'react'
import Navbar from '../components/Navbar'
import { MdOutlineFileUpload } from "react-icons/md";

const CreatePost = () => {
  return (
   <>
      <Navbar/>
      <div className='px-[100px] min-h-[80vh]'>
        
        <h3 className='text-xl font-[500] my-4'>Create Pin</h3>

        <div className='px-[50px] h-full w-full flex'>
            <div className='imgCon min-h-[70vh] flex items-center flex-col justify-center bg-[#E9E9E9] rounded-[20px] cursor-pointer w-[30%]'>
                <i className='text-[30px]'><MdOutlineFileUpload/></i>
                <p className='text-center mt-2'>choose a file or drag and drop <br/> it here</p>
            </div>

            <form className='h-full ml-3 p-3 w-[40vw]'>
                <p className='text-[gray] text-[13px] mb-2'>Title</p>
                <div className='inputBox2'>
                    <input type="text" placeholder='Add a title' />
                </div>

                <p className='text-[gray] text-[13px] mb-2 mt-4'>Description</p>
                <div className='inputBox2'>
                    <textarea placeholder='Enter description'></textarea>
                </div>

                <button className='btnNormal w-[38.5vw] mt-3 text-white !bg-[#E60023]'>Create</button>

            </form>

        </div>

      </div>
   </>
  )
}

export default CreatePost
