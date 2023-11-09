import React from 'react'

const RottenEgg = () => {
  return (
    <>
      <div className='bg-secondary rounded-xl p-3 py-6 sm:p-5 md:px-7'>
        <div className='mb-4'>
          <h3 className='font-medium text-xl md:text-2xl leading-3 sm:leading-8 sm:mt-0 mb-2'>
            Rotten Egg
          </h3>
          <span className='text-sm sm:text-base md:text-lg italic pl-3'>
              "Last one is a Rotten Egg!"
            </span>
        </div>
        <div className='pl-2 text-base md:text-lg'>
          <p>After a ghost hunt, players must run outside the house. The last player to reach the door is a rotten egg and will take 1 shot.</p>
          <p className='mt-3'>This wildcard can be combined with "Cursed Hunt".</p>
        </div>
      </div>
    </>
  )
}

export default RottenEgg