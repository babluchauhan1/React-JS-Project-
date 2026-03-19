import React from 'react'

const Rightsection3con = () => { 

  return (
    <section className="max-w-4xl mx-auto p-8 bg-white font-sans">
  {/* Top Label */}
   

  <div className="grid grid-cols-12 gap-4 relative">
    
    {/* Left Column */}
    <div className="col-span-5 flex flex-col gap-4">
      {/* Sky/Top Image - FIXED SELF-CLOSING TAG BELOW */}
      <div className="h-64 bg-gradient-to-b from-blue-100 to-blue-300 rounded-[40px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" 
          alt="Mountain top" 
          className="w-full h-full object-cover opacity-60 mix-blend-multiply" 
        />
      </div>
      
      {/* Blue Stats Box */}
      <div className="h-48 bg-blue-600 rounded-[40px] flex flex-col items-center justify-center text-center p-6 text-white shadow-lg">
        <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <p className="text-sm font-medium leading-tight">Fast-growing<br/>market segment</p>
      </div>
    </div>

    {/* Right Column */}
    <div className="col-span-7 flex flex-col gap-4">
      {/* Lime Box */}
      <div className="h-48 w-48 self-end bg-lime-400 rounded-[40px] flex flex-col items-center justify-center text-center p-6 shadow-md">
        <svg className="w-10 h-10 mb-3 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <p className="text-[13px] font-semibold text-gray-800 leading-tight">Trends of moving<br/>from retail to e-Tail</p>
      </div>

      {/* Main Mountain Silhouette Box */}
      <div className="flex-grow bg-blue-50 rounded-[40px] relative overflow-hidden min-h-[300px]">
        <div className="absolute inset-0 bg-cover bg-bottom" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&w=800&q=80')" }}>
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        </div>
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-black opacity-80">
           <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
           </svg>
        </div>
      </div>
    </div>
  </div>
</section>
  ) 
}
 
export default Rightsection3con