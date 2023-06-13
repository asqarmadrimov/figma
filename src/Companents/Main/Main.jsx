import React from 'react'
import Aboute from '../Aboute/Aboute'
import Contact from '../Contact/Contact'
import Hero from '../Hero/Hero'
import Pricing from '../Pricing/Pricing'
import Skills from '../Skills/Skills'

const Main = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Aboute />
      <Pricing />
      <Contact />
    </main>
  )
}

export default Main