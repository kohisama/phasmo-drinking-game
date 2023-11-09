import React from 'react'


const EVERYBODY_RULES = [
  <p>Take a sip when someone finds <a href='https://phasmophobia.fandom.com/wiki/Evidence#Ghost_evidences' rel='noreferrer' target='_blank' className='a-link'>ghost evidence</a>, excluding the person who found it. (If players both find evidence at the same time, both are exempted from taking a shot. Evidence seen inside the truck is not included.)</p>,
  <p>Take a shot for the wrong ghost.</p>,
  <p>Take a sip for each missing objective.</p>,
  <p>Bonus shot if you are fooled by a mimic (1 shot for misidentifying ghost, 1 shot for being fooled).</p>
]

const EverybodyRules = () => {
  return (
    <div className='w-full pb-14'>
      <div className='w-full max-w-[1440px] mx-auto'>
        <div className='flex flex-col text-default text-lg px-6'>
          <h2 className='text-3xl font-bold mb-5'>Everybody</h2>
          <div className='py-5 pl-8 bg-secondary rounded-xl'>
            <ul className='list-disc ml-3'>
              {EVERYBODY_RULES.map((items,index) => {
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