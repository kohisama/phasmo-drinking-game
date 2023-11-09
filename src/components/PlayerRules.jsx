import React from 'react'


const PLAYER_RULES = [
  <p>Take a sip if you witness a ghost event.</p>,
  <p>Take a sip if you find bones or <a href='https://phasmophobia.fandom.com/wiki/Cursed_possession' rel='noreferrer' target='_blank' className='a-link'>cursed possesions</a>. <span className='italic text-sm'>(up for debate)</span></p>,
  <p>Take 2 sips if you see the ghost (except ghost dots).</p>,
  <p>Take a sip if you take a picture and you get zero stars.</p>,
  <p>Take a shot if you scream/gasp.</p>,
  <p>Take a shot if you die.</p>
]

const PlayerRules = () => {
  return (
    <div className='w-full pb-14'>
      <div className='w-full max-w-[1440px] mx-auto'>
        <div className='flex flex-col text-default text-base md:text-lg px-4'>
          <h2 className='text-2xl md:text-3xl font-bold mb-5'>Player Rules</h2>
          <div className='p-3 py-6 sm:p-5 sm:py-7 md:px-7 bg-secondary rounded-xl'>
            <ul className='list-disc flex flex-col gap-3 ml-5'>
              {PLAYER_RULES.map((items,index) => {
                return (
                  <li key={index}>{items}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default PlayerRules