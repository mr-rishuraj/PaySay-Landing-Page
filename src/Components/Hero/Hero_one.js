import React from 'react'
import image_one from '../Assets/STI_IMG_3.svg'
// import { Modals } from '../Modals/Modals';
import '../style.css'
import Modal from "react-modal";
import { FaBeer } from 'react-icons/fa';
import video from "../Assets Images/video.mp4"
// import {AiOutlinePlayCircle} from '@ant-design/icons'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

// import 

// import {AiOutlinePlayCircle} from 'react-icons/ai'
Modal.setAppElement("#root");

function Hero_one() {

  // const  [showModal, setShowModal] = useState(false);
  // const openModal = () => {
  //   setShowModal(prev => !prev)
  // }
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div className='flex items-center justify-center pb-10'>
    <div className='bg-gradient-to-r from-green-300 via-emerald-500 to-teal-500 rounded-3xl mx-10 w-11/12 h-96'>
      <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pb-16 pl-10">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Investing app for <span className='text-yellow-500'> teens</span>,
              <br class="hidden lg:inline-block" />loved by parents
          </h1>
          <p class="mb-8 leading-relaxed text-xl">India's first trading app for teenagers</p>
          <div class="flex justify-center">
            <div className = 'flex justify-center items-center h-100vh'>
              <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg" onClick={() => setIsOpen(true)} >Join Waitlist</button>
              {/* <Modals showModal={showModal} setShowModal = {setShowModal} /> */}
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
              <button class="ml-4 inline-flex text-gray-700 border-0 py-2 px-3 focus:outline-none  hover:text-white rounded text-xl font-bold" ><a href= 'https://youtube.com/shorts/Ceq4LgaWQ9o?feature=share' target= 'blank'>Watch Video <span className='text-2xl'>▶️</span></a></button>
      
              
          </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded" alt="hero" src={image_one} />
          </div>
      </div>
      </section>
    </div>
    </div>
  )
}

export default Hero_one