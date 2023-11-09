import React from 'react'


const PLAYER_RULES = [
  <p>Take a sip if you witness a ghost event.</p>,
  <p>Take a sip if you find items or <a href='https://phasmophobia.fandom.com/wiki/Cursed_possession' rel='noreferrer' target='_blank' className='a-link'>cursed possesions</a>.</p>,
  <p>Take 2 sips if you see the ghost (except ghost dots).</p>,
  <p>Take a shot if you scream/gasp.</p>,
  <p>Take a shot if you die.</p>
]

const PlayerRules = () => {
  return (
    <div className='w-full pb-14'>
      <div className='w-full max-w-[1440px]'>
        <div className='flex flex-col px-6 text-default text-lg'>
          <h2 className='text-3xl font-bold mb-5'>Player Rules</h2>
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

export default PlayerRules