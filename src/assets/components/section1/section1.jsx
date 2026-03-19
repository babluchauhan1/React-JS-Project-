import React from 'react'
import Navbar from './Navbar'
import Pageonecontent from './Pageonecontent'

const Section1 = (props) => {
  
  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <Pageonecontent users={props.users}/>
        <div className="w-full h-[1px] bg-gray-300 mt-1"></div>
    </div>  
  ) 
}    
  
export default Section1 