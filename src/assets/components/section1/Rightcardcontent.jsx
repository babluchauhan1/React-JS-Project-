import React from 'react'

const Rightcardcontent = (props) => {

  return (
    <div className=' shrink-0 overflow-hidden relative rounded-4xl h-full w-80'>
      <img className=' h-full w-full object-cover' src={props.img} alt="" />
        <div className='absolute top-0 left-0 h-full w-full p-6 px-8 flex flex-col justify-between inset-0 bg-black/60 '> 
        <h2 className='py-2 px-3 bg-white rounded-full h-9 w-9 flex justify-center items-center text-2xl'>{props.num}</h2> 
        <div >
            <p className=' leading-snug text-white  text-2xl  mb-20 max-w-[250px] '> {props.intro}</p> 
       <div className='flex justify-between'>
         <button className=' bg-blue-600 py-1 px-13 rounded-4xl text-white font-medium text-2xl text-left flex-1'>{props.tag}</button> 
          <button className='bg-blue-600 py-1 px-3 rounded-4xl text-white text-3xl' ><i className="ri-arrow-right-line"></i> </button>
       </div>  
        </div>

    </div> 
    </div> 
  ) 
}
 
export default Rightcardcontent