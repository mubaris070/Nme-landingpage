import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Building2, MapPin } from "lucide-react";
import { Element } from "react-scroll";

function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const stats = [
    {
      id: 1,
      label: "Active Users",
      value: "100k+",
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
    },
    {
      id: 2,
      label: "Business",
      value: "50k+",
      icon: <Building2 className="w-6 h-6 md:w-8 md:h-8" />,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-100",
    },
    {
      id: 3,
      label: "Cities",
      value: "10k+",
      icon: <MapPin className="w-6 h-6 md:w-8 md:h-8" />,
      color: "text-slate-700",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-100",
    },
  ];

  return (
    <Element name="home">
      <div className="relative min-h-screen">
        <div className="relative z-10 flex flex-col md:flex-row items-center md:ml-6 md:items-start justify-start min-h-screen px-6 gap-6 pt-40">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2">
            <p className="rounded-3xl py-2 bg-white/50 text-[13px] text-gray-700 font-bold w-[220px] text-center mb-10">
              Your Local Business Network
            </p>

           <div className="text-center md:text-left space-y-2 md:space-y-10 mb-8">
  <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 leading-relaxed">
    Connect With <span className="text-blue-500">Local</span>
    <br className="hidden md:block" /> {/* line break after "Local" on mobile */}
    <span className="inline">Business</span> <span className="text-blue-500 inline">and </span> 
    <span className="md:block">Services Instantly</span> {/* break before last part */}
  </h1>
</div>


           <p className="text-gray-700 font-semibold">
  N-ME helps users discover nearby shops, healthcare services, and trusted{" "}
  <span className="inline md:block">professionals - all in one place</span>
</p>


            {/* DOWNLOAD BUTTONS – SINGLE LINE ON MOBILE */}
            <div
              className="flex flex-row sm:flex-row gap-3 md:gap-8
                         mt-10 md:my-10 justify-center md:justify-start"
            >
              {/* APP STORE */}
              <a
                href="https://apps.apple.com"
                className="flex items-center bg-black
                           h-[48px] md:h-[60px]
                           w-[140px] sm:w-[150px] md:w-[180px]
                           rounded-xl px-3 cursor-pointer
                           hover:bg-black/70"
              >
                <FontAwesomeIcon
                  icon={faApple}
                  className="text-white text-xl md:text-2xl"
                />
                <div className="ml-2 leading-tight text-center">
                  <p className="text-white text-[10px] md:text-[12px]">
                    Download on the
                  </p>
                  <h4 className="text-white font-semibold text-sm md:text-lg">
                    App Store
                  </h4>
                </div>
              </a>

              {/* PLAY STORE */}
              <a
                href="https://play.google.com/store/search?q=n-me+app&c=apps"
                className="flex items-center bg-black
                           h-[48px] md:h-[60px]
                           w-[140px] sm:w-[150px] md:w-[180px]
                           rounded-xl px-3 cursor-pointer
                           hover:bg-black/70"
              >
                <img
                  src="/playstore.png"
                  alt="Play Store"
                  className="h-[18px] md:h-[24px]"
                />
                <div className="ml-2 leading-tight text-center">
                  <p className="text-white text-[10px] md:text-[12px]">
                    Download on the
                  </p>
                  <h4 className="text-white font-semibold text-sm md:text-lg">
                    Play Store
                  </h4>
                </div>
              </a>
            </div>

            {/* STATS – SINGLE LINE ON MOBILE */}
            <div className="py-8">
              <div
                className="cursor-pointer max-w-6xl mx-auto
                           grid grid-cols-3 md:grid-cols-3
                           gap-2 md:gap-6"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="rounded-2xl p-3 md:p-4
                               flex flex-col items-center md:items-start
                               justify-center transition-transform hover:scale-105"
                  >
                    <div
                      className={`mb-4 md:mb-6 p-3 md:p-4 rounded-full border-2
                                  ${stat.borderColor} ${stat.bgColor} ${stat.color}`}
                    >
                      {stat.icon}
                    </div>

                    <h3
                      className={`text-xl md:text-3xl font-black mb-1 md:mb-2 ${stat.color}`}
                    >
                      {stat.value}
                    </h3>

                    <p className="text-sm md:text-lg font-bold text-gray-900">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT MOCKUP */}
          <div className="relative flex flex-col items-center justify-center bg-transparent p-4">
            <div
              className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[600px] mt-[250px] md:mt-[250px]
                         h-[320px] sm:h-[360px] md:h-auto md:aspect-[600/462]
                         md:bg-gradient-to-b md:from-transparent md:to-[#A4C2FF20]
                         flex justify-center items-end pb-12"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute bottom-4 w-[86%] md:w-[70%] h-14 md:h-12 bg-[#1e3d5d] rounded-[100%]"
              />

              <motion.div
                initial={{ y: -1000, opacity: 0 }}
                animate={{ y: -40, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  delay: 0.3,
                }}
                className="relative w-[85%] sm:w-[75%] md:w-[65%] z-20"
              >
                <div className="absolute inset-0 z-10 p-[2.5%]">
                  <div className="w-full h-full overflow-hidden rounded-[2.2rem] md:rounded-[3.2rem] bg-black">
                    <video
                      src="/videos/nmevd.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <img
                  src="/iphone.png"
                  alt="iPhone Frame"
                  className="relative z-20 w-[690px] md:w-[480px] h-[500px] md:h-[600px]
                             drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
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
