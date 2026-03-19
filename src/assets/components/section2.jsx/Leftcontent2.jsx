import React from 'react'

const Leftcontent2 = () => {
  return ( 
     <div className="bg-[#f5f5f5] p-10 rounded-2xl flex justify-between gap-10">

      <div className="max-w-md">
        <p className="text-xs bg-black text-white px-3 py-1 rounded-full w-fit mb-4">
          MARKET TRENDS
        </p> 
 
        <h1 className="text-3xl font-semibold leading-snug mb-4">
          E-com market is expected <br />
          to exceed{" "}
          <span className="bg-lime-300 px-2 rounded">$300B</span> in 2027
        </h1>

        <p className="text-gray-500 text-sm mb-6">
          In India MSME contribution to eTailing sales is expected to grow
          between 60-70% annually to reach USD60Bn by FY 2027
        </p>

        <div className="flex gap-4">
          <div className="bg-blue-500 text-white p-5 rounded-2xl w-[180px]">
            <h2 className="text-2xl font-bold">26.7%</h2>
            <p className="text-sm mt-2">
              Expected annual growth of eCom market size
            </p>
          </div>

          <div className="bg-lime-400 p-5 rounded-2xl w-[180px]">
            <h2 className="text-2xl font-bold">25%</h2>
            <p className="text-sm mt-2">
              E-com share of the organized retail in 2020
            </p>
          </div>
        </div> 
      </div>
    </div>
  )   
} 
   
export default Leftcontent2