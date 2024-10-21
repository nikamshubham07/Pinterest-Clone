import React from 'react'
import Card from './Card'

const NewOnPinterest = () => {
  return (
    <div className='px-[100px] mt-5 font-[500]'>
      <h3 className='text-2xl'>What's new on Pinterest</h3>
      <div className='cards'>
        <Card item={{img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"}}/> 
        <Card item={{img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}/> 
        <Card item={{img: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg"}}/> 
        <Card item={{img: "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}/> 
        <Card item={{img: "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg"}}/> 
        <Card item={{img: "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}/> 
        <Card item={{img: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg"}}/> 
        <Card item={{img: "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}/> 
        <Card item={{img: "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}/> 
        <Card item={{img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}/> 
        <Card item={{img: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}/> 
        <Card item={{img: "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg"}}/> 
        <Card item={{img: "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg"}}/> 
        
      </div>
    </div>
  )
}

export default NewOnPinterest
