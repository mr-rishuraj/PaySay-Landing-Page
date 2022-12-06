import React from 'react'
import image_two from '../Assets/STI_IMG_2.svg'
import '../style.css'
import Modal from "react-modal";
Modal.setAppElement("#root");


function Hero_two() {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div className='flex justify-center items-center'>
    <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" src={image_two} />
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Investing Early
          <br class="hidden lg:inline-block" /> To Get Your
          <br class="hidden lg:inline-block" /> Money <span className='text-yellow-500 underline-offset-4'>Growww</span>
        </h1>
        <p class="mb-8 leading-relaxed text-xl">Be smarter by learning to invest early in life.
        <br class="hidden lg:inline-block" />When you turn 18, you will be your own boss.</p>
        <div class="flex justify-center flex-col items-center">
          <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg" onClick={() => setIsOpen(true)}>Start Learning</button>
          <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                overlayClassName={{
                  base: "overlay-base",
                  afterOpen: "overlay-after",
                  beforeClose: "overlay-before"
                }}
                className={{
                  base: "content-base",
                  afterOpen: "content-after",
                  beforeClose: "content-before"
                }}
                closeTimeoutMS={500}
              >
                <div class="flex justify-center flex-col">
                <div className='flex flex-row '>
                    <label for="name" class="mb-2 text-xl font-medium text-gray-900 dark:text-gray-700 flex justify-center items-center ">Name : </label>
                    <input type="name" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100% p-2.5 px-5 pr-24 mx-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sam" required />
                  </div>
                  <div className='flex flex-row mt-4'>
                    <label for="email" class="mb-2 text-xl font-medium text-gray-900 dark:text-gray-700 flex justify-center items-center ">Email Address : </label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100% p-2.5 px-5 mx-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abcdef@gmail.com" required />
                  </div>
                  
                  <button type="submit" class=" flex justify-center mt-5 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setIsOpen(false)}>Submit</button>
                 </div>
              </Modal>
          <h1 className='pt-4 text-pink-400 font-bold'>COMMING SOON</h1>
        </div>
      </div>
    </div>
    </section>
    </div>
  )
}

export default Hero_two