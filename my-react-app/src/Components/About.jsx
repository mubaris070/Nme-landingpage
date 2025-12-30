  import React from 'react';
import { Element } from 'react-scroll';


function About(){
    return(
   <Element name='about'>
    <section className="relative max-w-7xl mx-auto px-6 py-30 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
      

      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">

        <div className="relative z-10 w-[300px] h-[400px] md:w-[450px] md:h-[550px] overflow-hidden rounded-t-full rounded-bl-full shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
            alt="Student studying" 
            className="w-full h-full object-cover"
          />
        </div>


     <div className="absolute -top-4 right-4 md:right-12 z-20
                w-30 h-30 md:w-44 md:h-44
                overflow-hidden rounded-full
                border-4 border-white shadow-xl
                bg-linear-to-br from-[#E4EEFF] to-[#7D99FF]
                flex items-center justify-center">
  <img 
    src="nmeblack.png" 
    alt="Traveler"
    className="w-[70px] md:w-[100px] h-[70px] md:h-[100px] object-contain"
  />
</div>



        <div className="absolute bottom-10 right-0 z-20 w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <img 
            src="https://i.pinimg.com/736x/fc/da/23/fcda23592568c859f0bf3244ccd48dbc.jpg" 
            alt="Instructor" 
            className="w-full h-full object-cover"
          />
        </div>

            <svg 
    viewBox="0 0 100 100" 
    className="absolute -right-7 md:right-14 top-97 md:top-114 w-14 md:w-24 h-14 md:h-24 transform rotate-180"
    fill="none" 
  >
    <path 
      d="M20,80 Q50,20 90,10" 
      className="stroke-red-400" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
    <path 
      d="M40,90 Q65,40 95,30" 
      className="stroke-red-400" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
    <path 
      d="M60,100 Q80,60 100,55" 
      className="stroke-red-400" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
  </svg>

             <svg className="absolute -left-15 top-30 text-orange-500 w-24 h-24 -z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4c0 1.105 4.477 2 10 2s10-.895 10-2" />
        </svg>
      </div>


      <div className="w-full lg:w-1/2 space-y-6">
      < p className="rounded-3xl py-2 bg-white/50 text-[14px] text-gray-700 font-bold w-[150px] text-center mb-10">
      About N-ME
    </p>

        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-normal">
         All Your Important Things  <br /> 
          <span className="text-blue-500">One Smart App.</span>
        </h1>
        
        <p className="text-gray-700 text-lg leading-relaxed max-w-md mb-8">
          “NME is a smart local search app designed to simplify your everyday needs.
           Whether you want to find a service or promote your business,
           NME connects you with trusted professionals in your city.”
        </p>


<a href="#" className="
    py-4  px-8 rounded-lg text-white font-medium text-1xl
  transition-all duration-700 ease-in-out
  bg-linear-to-b from-[#333a99] via-[#3a48b0] 
  bg-[length:100%_200%] bg-top
  hover:bg-bottom
  hover:shadow-[0_0_0px_rgba(59,85,360,0.9)]
  active:scale-0">
    Read More
</a>
      </div>

    </section>
    </Element>
    )
}
export default About