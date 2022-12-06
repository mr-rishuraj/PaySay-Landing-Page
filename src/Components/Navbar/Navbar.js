import React from 'react'
import '../style.css'
import Modal from "react-modal";
Modal.setAppElement("#root");

function Navbar() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
      <div className='flex-justify-center px-10 mr-20'>
      <a class="flex title-font font-bold items-center text-2xl text-yellow-500 mb-4 md:mb-0">
        <span class="ml-3 text-5xl">PaySay</span>
      </a>
      </div>
      <div className='flex-justify-center'>
      <nav class="md:ml-auto flex flex-wrap items-center text-base font-semibold text-black justify-center">
        <a class="mr-5 hover:text-gray-900">Home</a>
        <a class="mr-5 hover:text-gray-900" href='features.html'>Features</a>
        <a class="mr-5 hover:text-gray-900" href='explore.html'>Explore</a>
        <a class="mr-5 hover:text-gray-900" href='acadmey.html'>Acadmey</a>
      </nav>
      </div>
      <div className='flex-justify-center px-10'>
      <button class="inline-flex items-center border-2 border-slate-900/100 py-2 px-7 mr-20 ml-20 focus:outline-none hover:bg-gray-200 rounded-xl text-base mt-4 md:mt-0 " onClick={() => setIsOpen(true)}>Sign Up
      </button>
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
      </div>
    </div>
    </header>
  )
}

export default Navbar