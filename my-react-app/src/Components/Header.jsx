import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-white/70 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group"
          >
          <a href="#">
  <img
    src="nmeblack.png"
    alt="NME Logo"
    class="
      absolute z-20
      top-6 left-7      
      w-[50px]              
      h-auto
      sm:w-[110px]           
      md:w-[60px]     
      object-contain
    "
  />
</a>
          </button>

     {/* Desktop Navigation */}
 <nav className="hidden md:flex items-center gap-10">
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-80}
        className="cursor-pointer text-left font-semibold py-3 px-3 rounded-xl hover:blur-[2px] hover:text-blue-600 hover:scale-110 transition"
      >
        Home
      </Link>

      <Link
        to="features"
        smooth={true}
        duration={500}
        offset={-80}
        className="cursor-pointer text-left font-semibold py-3 px-3 rounded-xl hover:blur-[2px] hover:text-blue-600 hover:scale-110 transition"
      >
        Features
      </Link>

      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-80}
        className="cursor-pointer text-left font-semibold py-3 px-3 rounded-xl hover:blur-[2px] hover:text-blue-600 hover:scale-110 transition"
      >
        About
      </Link>

      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-80}
        className="cursor-pointer text-left font-semibold py-3 px-3 rounded-xl hover:blur-[2px] hover:text-blue-600 hover:scale-110 transition"
      >
        Contact
      </Link>
    </nav>

          <div className="hidden md:block">
<a href="#" class="
   overflow-hidden py-4 px-6 rounded-full text-white
  transition-all duration-700 ease-in-out
  bg-linear-to-b from-[#333a99] via-[#3a48b0] 
  bg-[length:100%_200%] bg-top
  hover:bg-bottom
  hover:shadow-[0_0_0px_rgba(59,85,360,0.9)]
  active:scale-0">
  Download App
</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-black/5 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`w-6 h-0.5 bg-gray-900 transition ${
                  isMobileMenuOpen && "rotate-45 translate-y-2"
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gray-900 transition ${
                  isMobileMenuOpen && "opacity-0"
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gray-900 transition ${
                  isMobileMenuOpen && "-rotate-45 -translate-y-2"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
    {isMobileMenuOpen && (
<div className="md:hidden mt-4 rounded-3xl backdrop-blur-xl bg-white/50 shadow-xl p-6 border border-white/20">
    <nav className="flex flex-col gap-4 ">
  <button
  onClick={() => scrollToSection("home")}
  className="text-left font-semibold py-3 px-4 rounded-xl hover:blur-[2px] hover:text-blue-600 hover:scale-110 transition"
>
  Home
</button>


      <button
        onClick={() => scrollToSection("features")}
        className="text-left font-semibold py-3 px-4 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition"
      >
        Features
      </button>

      <button
        onClick={() => scrollToSection("about")}
        className="text-left font-semibold py-3 px-4 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition"
      >
        About
      </button>

      <button
        onClick={() => scrollToSection("contact")}
        className="text-left font-semibold py-3 px-4 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition"
      >
        Contact
      </button>
    </nav>
  </div>
)}
      </div>
    </header>
    </>
  );
}

export default Header;