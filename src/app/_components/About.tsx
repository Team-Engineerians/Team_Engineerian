import React from 'react'
import AboutCard from './ui/AboutCard'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen w-full bg-[#fffff] flex justify-center items-center' >
      <div className='flex flex-col text-white justify-center text-center h-[500px] w-[1157px]   gap-[63px]' >
        <div className='flex flex-col' >
          <h1 className=' text-[55px] ' >What we do</h1>
          <h1 className='font-thin text-[55px] opacity-50' >inspires confidence</h1>
        </div>
        <div className=" flex flex-row gap-10  " >
            <div className="flex flex-col gap-4 items-center justify-center  w-[400px] h-[300px]  rounded-xl border-2 border-opacity-10 border-white">
                <h2 className='text-[26px] w-[118] opacity-50 ' >Innovative Designs</h2>
                <p className='w-[207px]' >Crafting unique, user-centered designs that inspire and connect.</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center  w-[400px] h-[300px] border-2 border-opacity-10 border-white rounded-xl">
                <h2 className='text-[26px] w-[118] opacity-50' >Flawless Experiences</h2>
                <p className='w-[207px]' >Seamlessly blending creativity and functionality to captivate users.</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center  w-[400px] h-[300px] border-2 border-opacity-10 border-white rounded-xl">
                <h2 className='text-[26px] w-[118]  opacity-50 ' >Scalable Solutions</h2>
                <p className='w-[207px]' >Building systems designed to grow with your ambitions.</p>
            </div>
        </div>
        <p className='opacity-50 ' >Redefining possibilities with solutions that inspire confidence and drive results.</p>
      </div>
    </div>
  )
}

export default About