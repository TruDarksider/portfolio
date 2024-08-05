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
      <div className="pt-16 flex-col text-center text-md p-6 bg-my-blue">
        <h1 className='text-2xl py-4 text-my-white'>Projects</h1>
        <p className='text-my-white'>
          All links open in a new tab.
        </p>
        <div className='text-right text-sm md:pr-60 text-my-white'>
          {'Carousel view '}
            {isToggled ? <button className='bg-my-green rounded-2xl p-1' onClick={handleToggle}>ON</button> 
              : <button className='bg-my-red rounded-2xl p-1' onClick={handleToggle}>OFF</button>}
        </div>
        {isToggled ? <Carousel/> : <DynamicCards/>}
      </div>
    );
}

export default Projects;