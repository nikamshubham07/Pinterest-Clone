import React from 'react'

const Card = ({ item }) => {
  let { img } = item;
  return (
    <div className='card'>
      <img className='mainImg' src={img} alt="Pinterest"/>
      <p className='font-[500] line-clamp-2 w-[90%]'>
        Title Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quae atque possimus?
      </p>
      <p className='text-[gray] text-[14px] line-clamp-2 w-[90%]'>
        Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores veritatis nihil odio!
      </p>
      <div className='flex items-center gap-[10px] mt-2'>
        <img className='w-[30px] h-[30px] rounded-[50%] object-cover cursor-pointer' src="https://images.pexels.com/users/avatars/312601/tu-n-ki-t-jr-813.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1" alt="" />
        <p className='mb-3'>
            Shubham
        </p>
      </div>
    </div>
  );
}

export default Card;
