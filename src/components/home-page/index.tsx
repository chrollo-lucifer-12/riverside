import React from 'react'
import Navbar from './navbar'
import HeroVideo from './hero-video'

const HomePage = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-full flex flex-col'>
        <Navbar />
        <HeroVideo />
      </div>
    </div>
  )
}

export default HomePage
