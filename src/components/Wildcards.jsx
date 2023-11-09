import React from 'react'

const Wildcards = () => {
  return (
    <div>
      <div className='w-full pb-14'>
        <div className='w-full max-w-[1440px] mx-auto'>
          <div className='flex flex-col px-6 text-default text-lg'>
            <h2 className='text-3xl font-bold mb-6'>Wildcards</h2>
            <div className='pl-2'>
              <h3 className='font-medium text-2xl mb-2'>
                Cursed Hunt<span>
                  <a
                    href='https://phasmophobia.fandom.com/wiki/Hunt#Cursed_hunts'
                    rel='noreferrer'
                    target='_blank'
                    className='text-sm a-link pl-1'>
                    (see Cursed Hunts)
                  </a>
                </span>
              </h3>
              <p>Take a shot if a player uses a cursed item to initiate a hunt and they survive it by walking out the door. A player can initiate a cursed hunt by broadcasting into the microphone</p>
              <p className='font-bold italic mx-auto my-6 w-fit px-2 border-l-2 border-r-2 border-primary'>"Who wants to play a game?"</p>
              <p>The player who initiates a cursed hunt must escape from the house after the ghost hunts. Other players cannot prevent the player from escaping.</p>
              <div className='pl-3'>
                <h4 className='text-xl font-medium mt-5 mb-3'>Conditions:</h4>
                <ul className='list-disc pl-8'>
                  <li>The player needs to broadcast into the radio to initiate a cursed hunt, cursed hunts that start without being broadcasted do not count.</li>
                  <li>If other players die due to a cursed hunt, the will only need to take 1 shot. (1 shot for dying).</li>
                  <li>If the player who initiates the cursed hunt dies, they will take a shot for dying.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wildcards