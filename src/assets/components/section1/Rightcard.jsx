import React from 'react'
import Rightcardcontent from './RightCardContent'

const Rightcard = (props) => {
  
  return (
    <div id='right' className='p-6 rounded-4xl overflow-x-auto h-full w-3/4 flex flex-nowrap gap-10'>
      {props.users.map(function(elem){
        return <Rightcardcontent img={elem.img} num={elem.num} intro={elem.intro} tag={elem.tag} />; 
      })} 
    </div> 
  ) 
}  
   
export default Rightcard