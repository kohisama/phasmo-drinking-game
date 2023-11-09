import React from 'react'

const CursedHunt = () => {
  return (
    <>
      <div className='bg-secondary rounded-xl p-3 py-6 sm:p-5 sm:py-7 md:px-7'>
        <div>
          <h3 className='font-medium text-xl md:text-2xl leading-3 sm:leading-8 mb-4 sm:mt-0'>
            Cursed Hunt
            <a
              href='https://phasmophobia.fandom.com/wiki/Hunt#Cursed_hunts'
              rel='noreferrer'
              target='_blank'
              className='text-xs md:text-sm a-link pl-1'>
              (see Cursed Hunts)
            </a>
          </h3>
        </div>
        <div className='pl-2 text-base md:text-lg'>
          <p>Take a shot if a player uses a cursed item to initiate a hunt and they survive it by walking out the door. A player can initiate a cursed hunt by broadcasting into the microphone</p>
          <div className='py-2 my-4 px-4 w-fit mx-auto border-l-2 border-r-2 border-accent'>
            <p className='font-bold italic text-center'>"Who wants to play a game?"</p>
          </div>
          
          <p>The player who initiates a cursed hunt must escape from the house after initiating the cursed hunt. Other players cannot prevent the player from escaping.</p>
          <div>
            <h4 className='text-xl font-medium mt-5 mb-3'>Conditions:</h4>
            <ul className='list-disc flex flex-col gap-2 pl-5 md:pl-8'>
              <li>The player needs to broadcast into the radio to initiate a cursed hunt, cursed hunts that start without being broadcasted do not count.</li>
              <li>If other players die due to a cursed hunt, the will only need to take 1 shot. (1 shot for dying).</li>
              <li>If the player who initiates the cursed hunt dies, they will take a shot for dying.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CursedHunt