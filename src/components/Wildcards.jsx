import React from 'react'
import CursedHunt from './CursedHunt'
import RottenEgg from './RottenEgg'

const Wildcards = () => {
  return (
    <div>
      <div className='w-full pb-14'>
        <div className='w-full max-w-[1440px] mx-auto'>
          <div className='flex flex-col px-4 text-default'>
            <div className='mb-3 sm:mb-4 md:mb-6'>
              <h2 className='text-2xl md:text-3xl font-bold'>Wildcards</h2>
              <p className='text-sm sm:text-base md:text-lg italic pl-3'>(Additional rules to spice the game.)</p>
            </div>
            <div className='flex flex-col gap-7'>
              <CursedHunt />
              <RottenEgg />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wildcards