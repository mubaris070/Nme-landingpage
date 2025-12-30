import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare,MapPin } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Element } from 'react-scroll';


const Contact = () => {
  const offices = [
    { city: 'Cochi', address: '6 Rue de Musset, Auteuil,kerala', phone: '+88 (827) 672 102', email: 'cybexeltechnologies@gmail.com' },
    { city: 'Coimbatore', address: '6 Rue de Musset, Auteuil, Tamilnadu', phone: '+88 (827) 672 102', email: 'cybexeltechnologies@gmail.com' },
    { city: 'Bangalore', address: '6 Rue de Musset, Auteuil, Karnataka', phone: '+88 (827) 672 102', email: 'cybexeltechnologies@gmail.com' },
  ];


  const[text,setText]=useState({
    username:'',
    email:'',
    message:'',
    phone:''
  })
  const[errors,setErrors]=useState({})


  function handle(e){
    setText({...text,[e.target.name]:e.target.value})
  }

const validate =()=>{
  const newerrors ={};
  if(!text.username || text.username.length < 3){
    newerrors.username ="Username must be atleast 5 characters"
  }
  if(!text.email || !/\S+@\S+\.\S+/.test(text.email)){
    newerrors.email = "Email is not valid"
  }
  if(!text.phone || !/^\d{10}$/.test(text.phone)){
    newerrors.phone = "Phone number must be 10 digits"
  }
  if(!text.message){
    newerrors.message = "Message is required"
  }
  return newerrors;
}


function submit(e){
  e.preventDefault();
  const validateerr = validate()
  setErrors(validateerr)

  if (Object.keys(validateerr).length > 0){
    toast.error("Form is not valid")
    return
  }
    axios.post("http://localhost:3001/users",{
      username: text.username,
        email: text.email,
        phone:text.phone,
        message:text.message,
    })
    .then(()=>{
      toast.success("Message sent successfully")
      setText({
        username:'',
        email:'',
        phone:'',
        message:''
      })
      setErrors({});
    })

     .catch(() => {
    toast.error("Failed to send message");
  })
}


  return (
    <Element name='contact'>
    <div className="font-sans text-gray-900  ">
      <section className="bg-[#1f2131] h-[1100px] md:h-auto  pt-16 pb-40 px-6 text-center  text-white relative">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2  mb-4">
  <p
    className="relative text-gray-50 font-bold text-[20px]
               w-[130px] text-center mb-6"
  >
    Contact us


    <svg
      viewBox="0 0 100 100"
      className="absolute top-1 right-4 w-30 h-20 rotate-50"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20,80 Q50,20 90,10"
        className="stroke-blue-400"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  </p>          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Get In Touch</h1>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let's connect! Whether it's feedback, inquries, or collabaration ideas, <br />
            <span>we'd love to hear from you</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 absolute left-0 top-80 md:right-0 -bottom-32 px-6">
          {offices.map((office, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl text-left text-gray-800 border border-gray-100">
              <h3 className="text-xl font-bold mb-6">{office.city} Office</h3>
              <div className="space-y-4 text-sm text-gray-500">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-orange-300 mt-1 shrink-0" />
                  <p>{office.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-orange-300 shrink-0" />
                  <p>{office.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-orange-300 shrink-0" />
                  <p>{office.email}</p>
                </div>
              </div>
              <button className="cursor-pointer mt-8 text-sm font-bold border-b-2 border-orange-200 pb-1 hover:border-orange-400 transition-colors">
                Find Us On Map
              </button>
            </div>
          ))}
        </div>
      </section>
<section
  className="
    flex flex-col md:flex-row
    gap-16 md:gap-20
    px-4 md:px-0
    md:pl-[230px]
    pt-34 md:pt-[220px]
    pb-[100px]
  "
  style={{
    backgroundImage: `
      radial-gradient(circle at center center, transparent, rgb(255,255,255)),
      linear-gradient(309deg, rgba(90,90,90,0.05) 0%, rgba(90,90,90,0.05) 50%, rgba(206,206,206,0.05) 50%, rgba(206,206,206,0.05) 100%),
      linear-gradient(39deg, rgba(13,13,13,0.05) 0%, rgba(13,13,13,0.05) 50%, rgba(189,189,189,0.05) 50%, rgba(189,189,189,0.05) 100%),
      linear-gradient(144deg, rgba(249,249,249,0.05) 0%, rgba(249,249,249,0.05) 50%, rgba(111,111,111,0.05) 50%, rgba(111,111,111,0.05) 100%),
      linear-gradient(166deg, rgba(231,231,231,0.05) 0%, rgba(231,231,231,0.05) 50%, rgba(220,220,220,0.05) 50%, rgba(220,220,220,0.05) 100%),
      linear-gradient(212deg, rgba(80,80,80,0.05) 0%, rgba(80,80,80,0.05) 50%, rgba(243,243,243,0.05) 50%, rgba(243,243,243,0.05) 100%),
      radial-gradient(circle at center center, hsl(107,19%,100%), hsl(107,19%,100%))
    `,
  }}
>
  {/* LEFT CONTENT */}
  <div className="flex flex-col mt-6 md:mt-16 items-center md:items-start text-center md:text-left">

    <p className="relative font-bold text-center md:text-[20px] text-gray-800 w-fit mb-4">
      Get In Touch

      <svg
        viewBox="0 0 100 100"
        className="absolute top-0 right-2 w-16 h-16 md:w-24 md:h-20 rotate-45"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20,80 Q50,20 90,10"
          className="stroke-blue-400"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </p>

<h6 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 mb-3 text-center md:text-left">
  <span className="md:hidden">
    Feel Free to <span className="text-blue-500">Contact</span> <span className="text-blue-500"><br />With Us</span>
  </span>
  <span className="hidden md:block">
    Feel Free to <br />
    <span className="text-blue-500">Contact With Us</span>
  </span>
</h6>


    <p className="text-sm md:text-base text-gray-500 max-w-xl leading-relaxed">
      Let's connect! Whether it's feedback, inquiries
      <span className="hidden md:inline">
        <br />
        or collaboration ideas, we'd love to hear from you.
      </span>
      <span className="md:hidden">
        {" "}or collaboration ideas, we'd love to hear from you.
      </span>
    </p>

  </div>


<div className="w-full max-w-md bg-[#f0f9f6] p-8 rounded-2xl shadow-sm border border-emerald-50">
        <form onSubmit={submit} className="space-y-4">
          
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name='username'
              value={text.username}
              placeholder="Name"
              onChange={handle}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border-none focus:ring-2 focus:ring-emerald-200 outline-none transition-all placeholder:text-gray-400"
            />
            <p className='text-red-500 text-center font-semibold text-sm'>{errors.username}</p>
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-6 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name='email'
              value={text.email}
              placeholder="Email"
              onChange={handle}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border-none focus:ring-2 focus:ring-emerald-200 outline-none transition-all placeholder:text-gray-400"
            />
            <p className='text-red-500 text-center font-semibold text-sm'>{errors.email}</p>
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-6 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              name='phone'
              value={text.phone}
              placeholder="Phone"
              onChange={handle}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border-none focus:ring-2 focus:ring-emerald-200 outline-none transition-all placeholder:text-gray-400"
            />
            <p className='text-red-500 text-center font-semibold text-sm'>{errors.phone}</p>
          </div>


          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
            <textarea
              placeholder="Enter your message"
              name='message'
              value={text.message}
              onChange={handle}
              rows="6"
              className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border-none focus:ring-2 focus:ring-emerald-200 outline-none transition-all placeholder:text-gray-400 resize-none"
            ></textarea>
            <p className='text-red-500 text-center font-semibold text-sm'>{errors.message}</p>
          </div>


          <button
            type="submit"
            className="w-full cursor-pointer
              transition-all duration-700 ease-in-out
  bg-linear-to-b from-[#333a99] via-[#3a48b0] 
  bg-[length:100%_200%] bg-top
  hover:bg-bottom
  hover:shadow-[0_0_0px_rgba(59,85,360,0.9)]
  active:scale-0
 text-white font-medium py-4 rounded-xl  mt-2"
          >
            Send Message
          </button>
        </form>
      </div>

</section>

      
    </div>
    </Element>
  );
}


export default Contact;