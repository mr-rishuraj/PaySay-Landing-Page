import React from 'react'
import image_three from '../Assets Images/image 3.png'
import '../style.css'
import Modal from "react-modal";
Modal.setAppElement("#root");

function Share() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  return (
    <div className='mx-10 flex p-2 rounded-3xl border-yellow-300 border-8 justify-between items-center '>
        <div className='w-3/4 mx-10'>
            <h1 className='text-3xl font-bold'>SHARE YOU LOVE WITH YOUR <br />FRIENDS</h1>
            <h1 className='text-xl font-bold mt-4'>Get <span className='text-yellow-400'>1 Month Premium</span> For Free & Your Friend Gets <span className='text-yellow-400'>Rs.100 Cash</span></h1>
            <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 mt-4 focus:outline-none hover:bg-pink-600 rounded text-lg" onClick={() => setIsOpen(true)} >I have a Code</button>
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
                  <div className='flex flex-row'>
                    <label for="email" class="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-00 flex justify-center items-center ">Code : </label>
                    <input type="number" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100% p-2.5 px-5 mx-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required />
                  </div>
                  <button type="submit" class=" flex justify-center mt-5 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setIsOpen(false)}>Submit</button>
                 </div>
              </Modal>
        </div>
        <div className='flex flex-col h-1/2 w-1/2 mx-10'>
            <img className ='' src={image_three} alt='share_image' />
        </div>
    </div>
  )
}

export default Share