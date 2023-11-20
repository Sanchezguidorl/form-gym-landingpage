import Image from 'next/image'
import React from 'react'
import imgBanner from '../../../public/images/banner-gym.webp';

function MainComponent() {
  return (
    ( <main id='Main' className='relative pt-8 overflow-hidden lazy'>
    <div className='overlay absolute w-full h-full flex items-center justify-center top-0'>
      <div className='text-white max-w-xs md:max-w-lg appear'>
      <h2 className='text-gray-400'>Form Gynm Functional Fitness Studio</h2>
      <h1 className='text-2xl sm:text-4xl md:text-6xl capitalize mt-4'>
        Where the fitness becomes your lifestyle
      </h1>
      <button className='btn-primary mt-5 hover:brightness-125' type='button'>Subscribe</button>
      </div>
    </div>
    <Image src={imgBanner} className='max-w-full pt-16' alt="Banner del gym"/>
  </main>)
  )
}

export default MainComponent
