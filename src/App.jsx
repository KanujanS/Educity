import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='Container'>
        <Title subtitle="What we offer" title="Our programs"/>
        <Programs/>
        <About/>
        <Title subtitle="Campus Photos" title="Gallery"/>
        <Campus/>
        <Title subtitle="What students says" title="Testimonials"/>
        <Testimonials/>
        <Title subtitle="Get in touch" title="Contact Us"/>
        <Contact/>
      </div>
    </div>
  )
}

export default App