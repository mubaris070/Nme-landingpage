import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { color, motion } from 'framer-motion';
import { useEffect, useState } from "react"
import { Users, Building2, MapPin } from 'lucide-react'; 
import { Element } from "react-scroll";

function Home() {
  const[show,setShow]=useState(false)

  useEffect(()=>{
    setShow(true)},[])

  const stats=[
    {
    id:1,
        label:"Active Users",
    value:'100k+',
    icon:<Users className="w-8 h-8"/>,
    color:"text-orange-500",
    bgColor:"bg-orange-50",
    borderColor:"border-orange-100"
    },
    {
    id:2,
        label:"Business",
    value:'50k+',
    icon:<Building2  className="w-8 h-8"/>,
    color:"text-teal-600",
    bgColor:"bg-teal-50",
    borderColor:"border-teal-100"
    },
    {
    id:2,
        label:"Cities",
    value:'10k+',
    icon:<MapPin  className="w-8 h-8"/>,
    color:"text-slate-700",
    bgColor:"bg-slate-50",
    borderColor:"border-slate-100"
    }
  ];
  return (
    <Element name='home'>
    <div className="relative min-h-screen">
   <div className="relative z-10 flex flex-col md:flex-row items-center md:ml-6 md:items-start justify-start min-h-screen px-6 gap-6 pt-40">
  <div className="w-full md:w-1/2">
    <p className="rounded-3xl py-2 bg-white/50 text-[13px] text-gray-700 font-bold w-[220px] text-center mb-10">Your Local Business Network</p>
<div className="text-center md:text-left space-y-2 md:space-y-10 mb-8">
<h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 leading-relaxed md:leading-relaxed">
  Connect With <span className="text-blue-500">Local</span>
  <br />
  Business <span className="text-blue-500">and</span>
  <br />
  Services Instantly
</h1>
</div>
<p className="text-gray-700 font-semibold">N-ME helps users discover neraby shops, healthcare services, and trusted <span className="block">proffessionals - all in one place </span></p>


 <div className="flex flex-col sm:flex-row
                gap-3 md:gap-8
                 mt-5 md:my-10">


                <a href="https://apps.apple.com" className="flex items-center bg-black
                  h-[48px] md:h-[60px]
                  w-[150px] md:w-[180px]
                  rounded-xl md:rounded-1xl
                  px-3 cursor-pointer
                  hover:bg-black/70">
        <FontAwesomeIcon
                    icon={faApple} className="text-white text-xl md:text-2xl"/>
        <div className="ml-2 leading-tight text-center">
          <p className="text-white text-[10px] md:text-[12px]">
            Download on the
          </p>
          <h4 className="text-white font-roboto font-semibold text-sm md:text-lg">
            App Store
          </h4>
        </div>
      </a>


      <a href="https://play.google.com/store/search?q=n-me+app&c=apps" className="flex items-center bg-black
                  h-[48px] md:h-[60px]
                  w-[150px] md:w-[180px]
                  rounded-xl md:rounded-1xl
                  px-3 cursor-pointer
                  hover:bg-black/70">
        <img src="/playstore.png"
             alt="Play Store"
             className="h-[18px] md:h-[24px]"/>
        <div className="ml-2 leading-tight text-center">
          <p className="text-white text-[10px] md:text-[12px]">
            Download on the
          </p>
          <h4 className="text-white font-roboto font-semibold text-sm md:text-lg">
            Play Store
          </h4>
        </div>
      </a>

    </div>

<div className=" py-8">
      <div className="cursor-pointer max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {stats.map((stat) => (
          <div 
            key={stat.id} 
            className=" rounded-2xl p-4 flex flex-col items-start justify-center   transition-transform hover:scale-105"
          >
            <div className={`relative mb-6 p-4 rounded-full border-2 ${stat.borderColor} ${stat.bgColor} ${stat.color}`}>
               {/* Soft Glow Shadow */}
               <div className="relative z-10">
                {stat.icon}
               </div>
            </div>

            {/* Stat Value */}
            <h3 className={`text-3xl font-black mb-2 tracking-tight ${stat.color}`}>
              {stat.value}
            </h3>

            {/* Label */}
            <p className="text-gray-900 font-bold text-lg">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>

  </div>


<div className="relative flex flex-col items-center justify-center  bg-transparent  p-4">
      
      {/* 1. STAGE CONTAINER (Your custom gradient & border logic) */}
      <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[600px] mt-[250px]
                      h-[320px] sm:h-[360px] md:h-auto md:aspect-[600/462]
                      md:bg-gradient-to-b md:from-transparent md:to-[#A4C2FF20]
                      flex justify-center items-end pb-12">

        {/* 2. DYNAMIC FLOOR SHADOW (Matches the generated image) */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute bottom-4 w-[75%] h-14 bg-[#1e3d5d]  rounded-[100%] z-0"
        />

        {/* 3. FALLING PHONE GROUP */}
        <motion.div
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: -40, opacity: 1 }} // Positioned slightly above the "floor"
          transition={{ 
            type: "spring", 
            stiffness: 50, 
            damping: 15, 
            delay: 0.3 
          }}
          className="relative w-[85%] sm:w-[75%] md:w-[65%] z-20"
        >
          {/* VIDEO SCREEN (Masked inside the iPhone frame) */}
          <div className="absolute inset-0 z-10 p-[2.5%] sm:p-[2.2%] md:p-[2.2%]">
            <div className="w-full h-full overflow-hidden rounded-[2.2rem] md:rounded-[3.2rem] bg-black">
              <video
                src="/videos/nmevd.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-[300px] h-full object-cover object-top"
              />
            </div>
          </div>

          {/* IPHONE FRAME (iphone2.png) */}
          <img
            src="/iphone.png"
            alt="iPhone Frame"
            className="relative z-20 w-[500px] h-[600px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
          />

        </motion.div>
      </div>
    </div>
</div>

    </div>
    </Element>
  );
}

export default Home;
