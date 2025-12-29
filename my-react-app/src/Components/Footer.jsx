  import React from 'react';


function Footer(){
    return(
        <>



<div
  className="bg-black  min-h-[500px]
             border-x-3 border-b-3 border-white
             rounded-t-3xl
             px-6 py-12 md:p-16
             overflow-x-hidden"
>


  <div className="flex flex-wrap md:flex-nowrap gap-6 justify-between">

    <div className="w-full md:w-[22%]">
<div className="flex items-center gap-4 mb-4
             justify-center md:justify-start md:text-left">

  <img src="nmeblack.png"
       className="w-[64px] h-[46px] md:w-[77px] md:h-[56px]" />

  <h2 className="font-poppins text-2xl font-semibold text-white">
    N - ME APP
  </h2>

</div>


      <p className="font-manrope text-white text-center font-light leading-loose ml-2 md:text-start">
      All your needs are simplified, secure, and just a tap away in one app.
    </p>
<div className="flex gap-6 mt-10 justify-center md:justify-start md:text-start">

 <a href="https://www.instagram.com" target="_blank" className="text-white text-2xl hover:text-[#C13584] transition-colors">
  <span className="iconify" data-icon="fa-brands:instagram"></span>
</a>


  <a href="https://www.facebook.com" target="_blank" className="text-white text-2xl hover:text-[#1877F2] transition-colors">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.098 2.796.142v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.407 0 22.675 0z"/>
    </svg>
  </a>

  <a href="https://www.twitter.com" target="_blank" className="text-white text-2xl hover:text-[#1DA1F2] transition-colors">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M459.4 151.7c.3 4.1.3 8.3.3 12.4 0 126.7-96.5 273-273 273-54.3 0-104.8-15.9-147.3-43.1 7.6.9 15.1 1.3 22.9 1.3 45 0 86.5-15.3 119.4-41.1-42.1-.8-77.6-28.5-89.9-66.6 5.9.9 11.9 1.5 18 1.5 8.7 0 17.1-1.2 25.1-3.4-44-8.9-77.2-47.6-77.2-94.2v-1.2c12.9 7.2 27.7 11.6 43.5 12.1-25.7-17.1-42.5-46.2-42.5-79.3 0-17.5 4.7-33.9 12.9-48 46.6 57.2 116.3 94.9 194.8 98.8-1.6-7.1-2.4-14.5-2.4-22.1 0-53.6 43.6-97.2 97.2-97.2 28 0 53.3 11.9 71.1 31 22.1-4.3 42.9-12.4 61.5-23.5-7.2 22.5-22.5 41.3-42.5 53.2 19.6-2.3 38.4-7.5 55.9-15.1-13 19.4-29.3 36.4-48.2 50.1z"/>
    </svg>
  </a>


  <a href="https://www.youtube.com" target="_blank" className="text-white text-2xl hover:text-[#FF0000] transition-colors">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M549.655 124.083c-6.281-23.652-24.837-42.209-48.488-48.489C458.604 64 288 64 288 64s-170.604 0-213.167 11.594c-23.652 6.281-42.209 24.837-48.489 48.489C16 166.645 16 256 16 256s0 89.355 10.344 131.917c6.281 23.652 24.837 42.209 48.489 48.489C117.396 448 288 448 288 448s170.604 0 213.167-11.594c23.652-6.281 42.209-24.837 48.488-48.489C560 345.355 560 256 560 256s0-89.355-10.345-131.917zM232 334V178l142 78-142 78z"/>
    </svg>
  </a>

</div>


    </div>

  <div className="flex flex-row w-full md:w-[44%] gap-4 mt-8 md:mt-0">


    <div className="w-1/2">
    <h2 className="text-white text-lg md:text-2xl font-poppins font-semibold mb-4 whitespace-nowrap text-center md:text-left">
      Quick Links
    </h2>

   <ul className="space-y-5 text-white font-manrope text-center md:text-left">
  
<li className="group relative">
  <span className="hidden md:block
           absolute left-0 top-1/2 -translate-y-1/2
           w-2 h-2 rounded-full bg-white
           opacity-0 scale-0
           md:group-hover:opacity-100 md:group-hover:scale-100">
  </span>
  <a href="#" className="inline-block
            duration-300
            md:group-hover:translate-x-3">
    Home
  </a>
</li>

<li className="group relative">
  <span className="hidden md:block
           absolute left-0 top-1/2 -translate-y-1/2
           w-2 h-2 rounded-full bg-white
           opacity-0 scale-0
           md:group-hover:opacity-100 md:group-hover:scale-100">
  </span>
  <a href="#" className="inline-block
            duration-300
            md:group-hover:translate-x-3">
    About
  </a>
</li>

<li className="group relative">
  <span className="hidden md:block
           absolute left-0 top-1/2 -translate-y-1/2
           w-2 h-2 rounded-full bg-white
           opacity-0 scale-0
           md:group-hover:opacity-100 md:group-hover:scale-100">
  </span>
  <a href="#" className="inline-block
            duration-300
            md:group-hover:translate-x-3">
    Blogs
  </a>
</li>

<li className="group relative">
  <span className="hidden md:block
           absolute left-0 top-1/2 -translate-y-1/2
           w-2 h-2 rounded-full bg-white
           opacity-0 scale-0
           md:group-hover:opacity-100 md:group-hover:scale-100">
  </span>
  <a href="#" className="inline-block
            duration-300
            md:group-hover:translate-x-3">
    FAQ's
  </a>
</li>

<li className="group relative">
  <span className="hidden md:block
           absolute left-0 top-1/2 -translate-y-1/2
           w-2 h-2 rounded-full bg-white
           opacity-0 scale-0
           md:group-hover:opacity-100 md:group-hover:scale-100">
  </span>
  <a href="#" className="inline-block
            duration-300
            md:group-hover:translate-x-3">
    Service
  </a>
</li>

<li className="group relative">
  <span className="hidden md:block
           absolute left-0 top-1/2 -translate-y-1/2
           w-2 h-2 rounded-full bg-white
           opacity-0 scale-0
           md:group-hover:opacity-100 md:group-hover:scale-100">
  </span>
  <a href="#" className="inline-block
            duration-300
            md:group-hover:translate-x-3">
    Contact
  </a>
</li>
</ul>

  </div>

  <div className="w-1/2">
    <h2 className="text-white text-lg md:text-2xl font-poppins font-semibold mb-4 whitespace-nowrap text-center md:text-left">
      Backend Offering
    </h2>

    <ul className="space-y-5 text-white font-manrope text-center md:text-left">
      <li>Web Development</li>
      <li>App Development</li>
      <li>Digital Marketing</li>
      <li>Graphic Design</li>
      <li>Branding</li>
    </ul>
  </div>

</div>


<div className="w-full md:w-[22%] mt-8 ml-6 md:mt-0 mx-auto">

  <h2 className="text-white text-2xl font-semibold font-poppins mb-6 text-center md:text-left">
    Get in Touch
  </h2>

  <ul className="font-manrope font-light text-white space-y-4">

<li className="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr] gap-0 md:gap-2 font-medium text-xs md:text-base">
<span className="font-medium">Email:</span>
      <div className="flex flex-col">
        <span>info@nmeapp.in</span>
        <span>cybexeltechnologies@gmail.com</span>
      </div>
    </li>

<li className="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr] gap-0 md:gap-2 font-medium text-xs md:text-base">
      <span className="font-medium">Phone:</span>
      <div className="flex flex-col">
        <span>+91 9072919991</span>
        <span>+91 9745109190</span>
      </div>
    </li>


<li className="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr] gap-0 md:gap-2 font-medium text-xs md:text-base">
      <span className="font-medium">Location:</span>
      <div className="flex flex-col">
        <span>Kochi,</span>
        <span>Thiruvananthapuram</span>
        <span>Coimbatore,Chennai,Bengaluru</span>
        <span>Dubai</span>
      </div>
    </li>

  </ul>
</div>


  </div>

<hr className="border-white mt-10 mb-4" />
  <p className="text-white text-center text-sm">
    © 2025 N-ME App. All rights reserved.
  </p>
</div>



        </>
    )
}
export default Footer