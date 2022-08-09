import React from 'react'
import Navbar from './navbar'
import Header from './Header'
import HowitWorks from './HowitWorks'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'



const Home = () => {
  return (
    <div>
      <Navbar/>  
      <Header/>
      <HowitWorks/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
 )
}

export default Home
