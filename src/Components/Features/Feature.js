import React from 'react'
import './feature.css'
import image_six from "../Assets Images/image 6.png"
import image_five from "../Assets Images/image 5.png"
import image_four from "../Assets Images/image 4.png"

import { useHorizontalScroll } from './useSideScroll'

function Feature() {

  const scrollRef = useHorizontalScroll();

  return (
    <div className='flex justify-center flex-col bg-blue-400 py-10 rounded-3xl mx-10'>
      <h1 className='flex justify-center text-5xl font-semibold pb-4'>How We Are Better</h1>
      <div  ref={scrollRef} className='flex flex-no-wrap overflow-x-scroll md:overflow-scroll overflow scrolling-touch items-start'  id='scrollbar'>
    <div className='flex flex-none rounded-3xl py-20 w-2/3 bg-cyan-300 mx-7'>
      <div className='flex justify-center items-center '>
      <div className='side_image'>
        <img className = 'm-3'src={image_five}/>
      </div>
      <div className = 'px-7'>
        <div className=''>
          <h1 className='text-3xl font-semibold pb-2'>EASY TO USE</h1>
        </div>
        <div className='text-lg font-semibold'>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
        </div>
        <button class="mt-4 inline-flex text-white font-bold bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn More</button>
      </div>
      </div>
      </div>
      <div className='flex flex-none rounded-3xl py-20 w-2/3 bg-cyan-300 mx-7'>
      <div className='flex justify-center items-center '>
      <div className='side_image'>
        <img className = 'm-3'src={image_four}/>
      </div>
      <div className = 'px-7'>
        <div className=''>
          <h1 className='text-3xl font-semibold pb-2'>SECURE AND RELIABLE</h1>
        </div>
        <div  className='text-lg font-semibold'>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
        </div>
        <button class="mt-4 inline-flex text-white font-bold bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn More</button>
      </div>
      </div>
      </div>
      <div className='flex flex-none rounded-3xl py-20 w-2/3 bg-cyan-300 mx-7'>
      <div className='flex justify-center items-center '>
      <div className='side_image'>
        <img className = 'm-3'src={image_six}/>
      </div>
      <div className = 'px-7'>
        <div className=''>
          <h1 className='text-3xl font-semibold pb-2'>GROWTH</h1>
        </div>
        <div  className='text-lg font-semibold'>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
        </div>
        <button class="mt-4 inline-flex text-white font-bold bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn More</button>
      </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Feature