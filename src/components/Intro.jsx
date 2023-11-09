import React from 'react'

const Intro = () => {
  return (
    <div>
      <div className='w-full py-14'>
        <div className='w-full max-w-[1440px] mx-auto'>
          <div className='flex flex-col px-4 text-default text-base md:text-lg'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>Phasmo Drinking Game Ruleset</h1>
            <p className='mb-5'>Choose your own drink. Control your own weight, its up to you to manage your own intake. Ideally you want to bring a drink you can enjoy but will still give a good buzz.</p>
            <p className='font-medium text-base sm:text-lg md:text-xl'>The fun is in participation, what fun is it if you do not <a href='https://www.youtube.com/watch?v=uHgt8giw1LY' target='_blank' rel='noreferrer' className='a-link'>particpate</a>?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro