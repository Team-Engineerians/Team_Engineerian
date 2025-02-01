import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#fffff] flex justify-center items-center px-4">
      <div className="flex flex-col text-white justify-center text-center max-w-[1157px] gap-[40px] sm:gap-[63px]">
        
        {/* Heading */}
        <div className="flex flex-col">
          <h1 className="text-[40px] sm:text-[55px]">What we do</h1>
          <h1 className="font-thin text-[40px] sm:text-[55px] opacity-50">inspires confidence</h1>
        </div>

        {/* Card Container - Always in Row */}
        <div className="flex flex-wrap justify-center sm:justify-between gap-6 sm:gap-10 w-full">
          {/* Card Component */}
          {[
            { title: "Innovative Designs", text: "Crafting unique, user-centered designs that inspire and connect." },
            { title: "Flawless Experiences", text: "Seamlessly blending creativity and functionality to captivate users." },
            { title: "Scalable Solutions", text: "Building systems designed to grow with your ambitions." }
          ].map((item, index) => (
            <div 
              key={index} 
              className="relative flex flex-col gap-4 items-center justify-center w-full sm:w-[350px] lg:w-[350px] h-[300px] rounded-xl border-2 border-opacity-10 border-white group overflow-hidden flex-shrink-0 text-white transition-colors duration-500"
            >
              {/* Background Hover Effect */}
              <div className="absolute inset-0 transition-all duration-500 group-hover:bg-[radial-gradient(at_50%_55%,_rgba(188,197,206,1)_0%,_rgba(84,88,92,1)_100%)]"></div>

              {/* Grid Overlay */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10 transition-opacity duration-500 group-hover:opacity-50">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="border border-white border-opacity-10"></div>
                ))}
              </div>

              {/* Title */}
              <h2 className="relative text-[22px] sm:text-[26px] w-full max-w-[200px] text-white text-opacity-50 font-bold transition-colors duration-500 group-hover:text-black group-hover:text-opacity-100">
                {item.title}
              </h2>

              {/* Paragraph */}
              <p className="relative w-[80%] sm:w-[207px] text-white transition-colors duration-500 group-hover:text-black text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="opacity-50 text-[14px] sm:text-[16px] px-4">
          Redefining possibilities with solutions that inspire confidence and drive results.
        </p>
      </div>
    </div>
  )
}

export default About
