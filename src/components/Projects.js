import '../stylesheets/Projects.css'
import React, { useState } from 'react'
import Carousel from './Carousel'
import DynamicCards from './DynamicCards';

function Projects() {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () =>{
    setToggle(!isToggled);
  };

    return (
      <div className="flex flex-col items-center bg-my-blue min-h-dvh">
        <div className="pt-16 flex flex-col items-center text-md p-6 max-w-7xl">
          <h1 className='text-2xl py-4 text-my-white'>Projects</h1>
          <p className='text-my-white'>
            All links open in a new tab.
          </p>
          <div className='text-right text-sm text-my-white self-end'>
            {'Carousel view '}
              {isToggled ? <button className='bg-my-green rounded-2xl p-1' onClick={handleToggle}>ON</button> 
                : <button className='bg-my-red rounded-2xl p-1' onClick={handleToggle}>OFF</button>}
          </div>
          {isToggled ? <Carousel/> : <DynamicCards/>}
        </div>
      </div>
    );
}

export default Projects;