import '../stylesheets/Projects.css'
import React, { useState } from 'react'
import Carousel from './Carousel'
import DynamicCards from './DynamicCards';

function Projects() {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () =>{
    setToggle(!isToggled);
    /* const toggle = document.querySelector('.toggle');
    if(toggle.classList.contains('on')){
      toggle.classList.remove('on')
      toggle.classList.add('off')
    }else{
      toggle.classList.remove('off')
      toggle.classList.add('on')
    } */
  };

    return (
      /*<div className="project-area" id="projects">
        <h1>Projects</h1>
        <p>
          Title is a link to a live deployment, github image links to code. All
          links open in a new tab.
        </p>
        <div>
          {'Carousel view '}
          <button className='toggle off' onClick={handleToggle}>
            {isToggled ? 'ON' : 'OFF'}
          </button>
        </div>
        {isToggled ? <Carousel/> : <DynamicCards/>}
      </div>*/
      <div className="flex-col text-center text-md p-6">
        <h1 className='text-2xl py-4'>Projects</h1>
        <p>
          Title is a link to a live deployment, github image links to code. All
          links open in a new tab.
        </p>
        <div className='text-right text-sm pr-60'>
          {'Carousel view '}
            {isToggled ? <button className='bg-my-green rounded-2xl p-1' onClick={handleToggle}>ON</button> 
              : <button className='bg-my-red rounded-2xl p-1' onClick={handleToggle}>OFF</button>}
        </div>
        {isToggled ? <Carousel/> : <DynamicCards/>}
      </div>
    );
}

export default Projects;