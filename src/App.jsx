import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/Video player/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='Container'>
        <Title subtitle="What we offer" title="Our programs"/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subtitle="Campus Photos" title="Gallery"/>
        <Campus/>
        <Title subtitle="What students says" title="Testimonials"/>
        <Testimonials/>
        <Title subtitle="Get in touch" title="Contact Us"/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App