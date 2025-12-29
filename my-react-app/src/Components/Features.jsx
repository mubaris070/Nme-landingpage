import { Search, HeartPulse, Megaphone, ShieldCheck, ArrowUpRight, Icon } from "lucide-react"
import { Element } from "react-scroll";


function Features(){

    const features=[
        {
            id:'1',
            title:'Skip the Search. Find the Standard.',
            description:'Direct access to a handpicked selection of verified local services and boutique establishments.',
            icon:Search,
            bgcolor:"bg-blue-500",
            color:'text-white',
            span:"md:col-span-2",
            imageQuery: "modern storefront aerial view",

        },
        {
            id:'2',
            title:'One solution for all services.',
            description:'A seamless, direct-to-provider link for instant emergency response and medical facilities.',
            icon:HeartPulse,
            bgcolor:"bg-red-500",
                        color:'text-white',
            span:"md:col-span-1",
            imageQuery: "modern storefront aerial view",

        },
        {
                        id:'3',
            title:'Promote Your Business.',
            description:'Scale your brand with high-impact, affordable promotions—minus the agency overhead.',
            icon:Megaphone,
            bgcolor:"bg-orange-500",
                        color:'text-white',
            span:"md:col-span-1",
            imageQuery: "modern storefront aerial view",
        },
        {
                        id:'4',
            title:'Trusted Local Network.',
            description:'Transparent, community-driven insights designed to ensure accountability and absolute confidence.',
            icon:ShieldCheck,
            bgcolor:"bg-green-500",
                        color:'text-white',
            span:"md:col-span-2",
            imageQuery: "modern storefront aerial view",
        }
    ]


    return(
    <Element name="features">
   <div className=" md:ml-6 min-h-screen px-6 mt-10 gap-6">
  <div>
    <p className="rounded-3xl py-2 bg-white/50 text-[14px] text-gray-700 font-bold w-[190px] text-center mb-10">
      Platform Capabilities
    </p>

    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-relaxed md:leading-normal">
      Everything you <span className="block text-gray-500">need, <span className="text-gray-900">connected</span></span>
      <span className="text-gray-500">in one ecosystem.</span>
    </h1>

    <p className="text-lg md:font-semibold text-gray-700 max-w-xl leading-relaxed my-6">
      Explore the powerful tools and services designed to bridge the gap between you and your local community.
    </p>
  </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-amber-100/50 border-amber-100 rounded-sm overflow-hidden shadow-2xl shadow-amber-900/5 mb-10">
        {features.map((feature) => {
          const Icon = feature.icon; // Capitalize component
          return (
            <div
              key={feature.id}
              className="group relative bg-[#FCFAF7] p-12 transition-colors hover:bg-white"
            >
              <div className="mb-12 flex items-center justify-between">
                <div className={`p-3 rounded-full border border-amber-100 bg-white text-amber-900 transform transition-transform group-hover:scale-110`}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-medium tracking-widest text-amber-900/40 uppercase">
                  Feature 0{feature.id}
                </span>
              </div>

              <h3 className="text-3xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed max-w-md font-light">
                {feature.description}
              </p>

              <div className="mt-8 h-px w-0 bg-amber-200 group-hover:w-full transition-all duration-700" />
            </div>
          );
        })}
      </div>
</div>
</Element>

    )
}
export default Features