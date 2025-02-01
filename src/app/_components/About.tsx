import React from 'react'
import AboutCard from './ui/AboutCard'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen w-full bg-[#fffff] flex justify-center items-center' >
      <div className='flex flex-col text-white justify-center text-center h-[500px] w-[1157px] gap-[63px]  ' >
        <div className='flex flex-col' >
          <h1 className=' text-[55px] ' >What we do</h1>
          <h1 className='font-thin text-[55px] opacity-50' >inspires confidence</h1>
        </div>
        <div className=" flex flex-row gap-10  " >
            <div className="relative flex flex-col gap-4 items-center justify-center w-[400px] h-[300px] rounded-xl border-2 border-opacity-10 border-white group overflow-hidden text-opacity-50 text-white transition-colors duration-500">
                {/* Background Hover Effect */}
                <div className="absolute inset-0 transition-all duration-500 group-hover:bg-[radial-gradient(at_50%_55%,_rgba(188,197,206,1)_0%,_rgba(84,88,92,1)_100%)]"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10 transition-opacity duration-500 group-hover:opacity-50">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="border border-white border-opacity-10"></div>
                    ))}
                </div>

                {/* Heading (remains the same) */}
                <h2 className="relative text-[26px] w-full max-w-[118px] text-white text-opacity-50 font-bold transition-colors duration-500 group-hover:text-black group-hover:text-opacity-100">
                Innovative Designs
                </h2>

                {/* Paragraph (White by default, Black on Hover) */}
                <p className="relative w-[207px] text-white transition-colors duration-500 group-hover:text-black">
                    Crafting unique, user-centered designs that inspire and connect.
                </p>
            </div>


            <div className="relative flex flex-col gap-4 items-center justify-center w-[400px] h-[300px] rounded-xl border-2 border-opacity-10 border-white group overflow-hidden text-opacity-50 text-white transition-colors duration-500">
                {/* Background Hover Effect */}
                <div className="absolute inset-0 transition-all duration-500 group-hover:bg-[radial-gradient(at_50%_55%,_rgba(188,197,206,1)_0%,_rgba(84,88,92,1)_100%)]"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10 transition-opacity duration-500 group-hover:opacity-50">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="border border-white border-opacity-10"></div>
                    ))}
                </div>

                {/* Heading (remains the same) */}
                <h2 className="relative text-[26px] w-full max-w-[118px] text-white text-opacity-50 font-bold transition-colors  duration-500 group-hover:text-black group-hover:text-opacity-100">
                Flawless Experiences
                </h2>

                {/* Paragraph (White by default, Black on Hover) */}
                <p className="relative w-[207px] text-white transition-colors duration-500 group-hover:text-black">
                Seamlessly blending creativity and functionality to captivate users.
                </p>
            </div>


 <div className="relative flex flex-col gap-4 items-center justify-center w-[400px] h-[300px] rounded-xl border-2 border-opacity-10 border-white group overflow-hidden text-opacity-50 text-white transition-colors duration-500">
                {/* Background Hover Effect */}
                <div className="absolute inset-0 transition-all duration-500 group-hover:bg-[radial-gradient(at_50%_55%,_rgba(188,197,206,1)_0%,_rgba(84,88,92,1)_100%)]"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10 transition-opacity duration-500 group-hover:opacity-50">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="border border-white border-opacity-10"></div>
                    ))}
                </div>

                {/* Heading (remains the same) */}
                <h2 className="relative text-[26px] w-full max-w-[118px] text-white text-opacity-50 font-bold transition-colors duration-500 group-hover:text-black group-hover:text-opacity-100">
                Scalable Solutions
                </h2>

                {/* Paragraph (White by default, Black on Hover) */}
                <p className="relative w-[207px] text-white transition-colors duration-500 group-hover:text-black">
                Building systems designed to grow with your ambitions.
                </p>
            </div>
        </div>
        <p className='opacity-50 ' >Redefining possibilities with solutions that inspire confidence and drive results.</p>
      </div>
    </div>
  )
}

export default About