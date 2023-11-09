import React from 'react'


const PLAYER_RULES = [
  <p>Take a sip when someone finds evidence, excluding the person who found it. (If player both find evidence at the same time, both are exempted from taking a shot. Evidence seen inside the truck is not included.)</p>,
  <p>Take a shot for the wrong ghost.</p>,
  <p>Take a sip for each missing objective.</p>,
  <p>Bonus shot if you are fooled by a mimic (1 shot for misidentifying ghost, 1 shot for being fooled).</p>
]

const EverybodyRules = () => {
  return (
    <div className='w-full pb-14'>
      <div className='w-full max-w-[1440px]'>
        <div className='flex flex-col px-6 text-default text-lg'>
          <h2 className='text-3xl font-bold mb-5'>Everybody</h2>
          <div className='pl-8'>
            <ul className='list-disc'>
              {PLAYER_RULES.map((items,index) => {
                return (
                  <li key={index} className='pb-1'>{items}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default EverybodyRules