import React from 'react'
import Blog from './Components/Blog/Blog'
import Hero_one from './Components/Hero/Hero_one'
import Hero_two from './Components/Hero/Hero_two'
import Feature from './Components/Features/Feature'
import Navbar from './Components/Navbar/Navbar'
import Share from './Components/Share/Share'
import Faq from './Components/FAQ/Faq'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      < Navbar />
      < Hero_one />
      < Blog />
      {/* < How are We Better /> */}
      < Feature />
      < Hero_two />
      {/* <Sharing /> */}
      < Share />
      {/* <Frequently asked qna /> */}
      < Faq />
      < Footer />
    </div>
  )
}

export default App