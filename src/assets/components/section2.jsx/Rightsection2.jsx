import React from 'react'
import Rightsectio2con from './Rightsection2con'

const Rightsection2 = (props) => {
  
  return (
    <div id='right' className='p-6 rounded-4xl overflow-x-auto h-full w-3/4 flex flex-nowrap gap-10'>
    <Rightsectio2con data={props.data} /> 
    </div>  
  ) 
}     
      
export default Rightsection2  