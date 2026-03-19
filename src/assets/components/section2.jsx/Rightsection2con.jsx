import React from 'react'

const Rightsection2con = ({data}) => {
  return ( 
     <div className="relative flex-1 bg-white rounded-2xl p-6">

        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full">
          26.7% CAGR
        </div> 
 
        <div className="flex items-end justify-between h-[300px] mt-6 px-4">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">

              <span className="text-xs text-gray-400">
                {item.value} 
              </span>

              <div 
                className="w-[14px] bg-black rounded-full hover:bg-gray-800 transition-all duration-300"
                style={{ height: `${item.value}px` }}
              ></div>

              <p className="text-[10px] text-gray-400">
                {item.year}
              </p>  
            </div>
          ))}
        </div>
      </div> 
  );
}
export default Rightsection2con 