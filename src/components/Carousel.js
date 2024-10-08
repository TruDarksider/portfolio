import React, {useState, useEffect} from 'react'
import projects from '../data.json'

function Carousel(){
    function getImgUrl(img){
        let image = require('../images/'+img)
        return image
    }
    let xStart = null;
    const [slideIndex, setSlideIndex] = useState(0);
    const [project, setProject] = useState(projects[slideIndex])

    const handleTouchStart = (e) => {
      xStart = e.touches[0].clientX;
    }
  
    const swipeChangeSlide = (e) => {
      let offset = 0;
      let xEnd = e.changedTouches[0].clientX;
      if (xEnd - xStart < 20 && xEnd - xStart > -20) {
        return;
      }
      xEnd - xStart > 0 ? (offset = -1) : (offset = 1);
      //Below is from changeSlide
      let tempIndex = slideIndex + offset;

      const dots = document.querySelector('[data-dots]');
      const activeDot = dots.querySelector('[data-active]')
      
      handleChange(tempIndex);
      
      dots.children[slideIndex].dataset.active = true;
      if(activeDot !== dots.children[slideIndex]){
        delete activeDot.dataset.active; }
    }

    const changeSlide = (e) => {
        const offset = e.target.getAttribute('data-carousel-button')==="next" ? 1 : -1;
        let tempIndex = slideIndex + offset;
          
        handleChange(tempIndex);
      }

      const handleChange = (newIndex) =>{
        if (newIndex < 0) {
            setSlideIndex(projects.length - 1);
        }else if (newIndex >= projects.length) {
            setSlideIndex(0);
        } else {
            setSlideIndex(newIndex);
        }
        setProject(projects[slideIndex])
        const dots = document.querySelector('[data-dots]');
        const activeDot = dots.querySelector('[data-active]');
        dots.children[slideIndex].dataset.active = true;
        dots.children[slideIndex].classList.add('bg-my-red');
        //Delete styles and attributes related to being active for previously active index
          if(activeDot !== dots.children[slideIndex]){
            activeDot.classList.remove('bg-my-red');
            activeDot.classList.add('bg-my-blue')
            delete activeDot.dataset.active; }
      }
    
    const goToIndex = (e) => {
      //Store current active
      const dots = document.querySelector("[data-dots]");
      //Find index of clicked dot and check it's not already active
      let indexOfClicked = Number(e.target.id);
      if (dots.children[indexOfClicked].dataset.active) {
        return;
      }
      //Use function to update to the new index and handle
      handleChange(indexOfClicked);
    }

    useEffect(()=>{
        handleChange(slideIndex)
    },[slideIndex])

    return(
        <div className="" onTouchStart={handleTouchStart} onTouchEnd={swipeChangeSlide} data-carousel>
          <div className='flex place-content-evenly'>
            <button
              className="w-10 border-solid border-2 border-my-blue bg-my-green"
              data-carousel-button="prev"
              onClick={changeSlide}
            >
              &#60;
            </button>
            <ul className="flex flex-col gap-4 items-center" data-slides>
            <li key={project.id} className=' max-w-5xl shadow-md flex flex-col lg:flex-row items-center p-2 bg-my-white' data-active={project.dataActive}>
                <img
                    className="max-h-64 w-auto"
                    alt={project.imageDesc}
                    src={getImgUrl(project.image)}
                />
                <div>
                <div className="flex flex-col items-center justify-center pb-6">
                <h2 className='text-my-blue text-xl'>{project.title}</h2>
                    <div className='flex items-center gap-1'>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className='text-my-black'
                      >
                        live site
                      </a>
                      |
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        repo
                    </a>
                    </div>
                </div>
                <p>
                  {project.description}
                </p>
                <div className='flex gap-2 text-sm items-center justify-center'>
                    {project.pills.map((pill)=>(
                        <div key={pill} id={pill.toString()} className='rounded-2xl p-1'>
                            {pill}
                        </div>
                    ))
                    }
                </div>
                </div>
            </li>
          </ul>
            <button
              className="w-10 border-solid border-2 border-my-blue bg-my-green"
              data-carousel-button="next"
              onClick={changeSlide}
            >
              &#62;
            </button>
          </div>
          
          <div className="flex place-content-evenly pt-2" data-dots>
            <div className="h-4 w-4 bg-my-red rounded-lg border-my-green border-2" onClick={goToIndex} id='0'  data-active></div>
            <div className="h-4 w-4 bg-my-blue rounded-lg border-my-green border-2" onClick={goToIndex} id='1'></div>
            <div className="h-4 w-4 bg-my-blue rounded-lg border-my-green border-2" onClick={goToIndex} id='2'></div>
            <div className="h-4 w-4 bg-my-blue rounded-lg border-my-green border-2" onClick={goToIndex} id='3'></div>
            <div className="h-4 w-4 bg-my-blue rounded-lg border-my-green border-2" onClick={goToIndex} id='4'></div>
          </div>
        </div>
    )
}

export default Carousel;

