import React from 'react'
import image_seven from "../Assets Images/image 7.png"
import image_eight from "../Assets Images/image 8.png"
import image_nine from "../Assets Images/image 9.png"


function Blog() {
  return (
    <div className = "flex flex-col bg-yellow-400 justify-center items-center mx-10 my-20 rounded-3xl">
      <h1 className='py-5 text-5xl font-semibold'>What We Are Offering</h1>
      <div className='flex flex-row justify-between rounded-3xl'>
        <section
        class=" flex bg-gray-900 justify-center items-center gap-x-16 text-white mx-5 my-5"
      >
        <div
          class="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective"
        >
          <div
            class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
          >
            <div class="absolute backface-hidden w-full h-full flex justify-center items-center bg-white">
              <img src={image_seven} class="" />
            </div>
            <div
              class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
            >
              <div
                class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
              >
                <h1 class="text-2xl font-bold">Learn Finance & Investing</h1>
      
                <p className='my-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                  itaque assumenda saepe animi maxime libero non quasi, odit natus
                  veritatis enim culpa nam inventore doloribus quidem temporibus
                  amet velit accusamus.
                </p>
                <button
                  class="bg-yellow-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class=" flex bg-gray-900 justify-center items-center gap-x-16 text-white mx-5 my-5"
      >
        <div
          class="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective"
        >
          <div
            class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
          >
            <div class="absolute backface-hidden bg-white w-full h-full flex justify-center items-center">
              <img src={image_eight} class="" />
            </div>
            <div
              class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
            >
              <div
                class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
              >
                <h1 class="text-2xl font-bold">Invest In Stock, IPOs, & Mutual Funds</h1>
      
                <p className='my-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                  itaque assumenda saepe animi maxime libero non quasi, odit natus
                  veritatis enim culpa nam inventore doloribus quidem temporibus
                  amet velit accusamus.
                </p>
                <button
                  class="bg-yellow-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="flex bg-gray-900 justify-center items-center gap-x-16 text-white mx-5 my-5"
      >
        <div
          class="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective"
        >
          <div
            class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
          >
            <div class="absolute backface-hidden bg-white w-full h-full flex justify-center items-center">
              <img src={image_nine} class="" />
            </div>
            <div
              class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
            >
              <div
                class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
              >
                <h1 class="text-2xl font-bold">Set And Acheive Goals</h1>
      
                <p className='my-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                  itaque assumenda saepe animi maxime libero non quasi, odit natus
                  veritatis enim culpa nam inventore doloribus quidem temporibus
                  amet velit accusamus.
                </p>
                <button
                  class="bg-yellow-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Blog