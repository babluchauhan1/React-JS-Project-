import React from 'react'
import Rightcontent from './Rightcard'
import Leftcontent from './Leftcontent'

const Pageonecontent = (props) => {
  return (
    <div className='flex justify-between items-center h-[90vh] pb-16 pt-6 px-18 gap-10'>  
        <Leftcontent/>
         <Rightcontent users={props.users} />   
    </div>    
  ) 
}  

export default Pageonecontent 