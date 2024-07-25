import React, {useState, useEffect} from 'react'
import mbScreenshot from '../images/MessageBoard.png'
import ktScreenshot from '../images/KnightTravails.png'
import shopScreenshot from '../images/ShopScreenshot.png'
import photoScreenshot from '../images/PhotoAppScreenShot.png'
import easScreenshot from '../images/EtchASketch.png'
import github from '../github-original.svg'
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
      if(activeDot != dots.children[slideIndex]){
        delete activeDot.dataset.active; }
    }

    const changeSlide = (e) => {
        const offset = e.target.classList.contains("next") ? 1 : -1;
        let tempIndex = slideIndex + offset;

          const dots = document.querySelector('[data-dots]');
          const activeDot = dots.querySelector('[data-active]');
          
          handleChange(tempIndex);
          
          dots.children[slideIndex].dataset.active = true;
          if(activeDot != dots.children[slideIndex]){
            delete activeDot.dataset.active; }
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
          if(activeDot != dots.children[slideIndex]){
            delete activeDot.dataset.active; }
      }
    
    const goToIndex = (e) => {
      //Store current active
      const dots = document.querySelector("[data-dots]");
      const activeDot = dots.querySelector("[data-active]");
      //Find index of clicked dot
      let indexOfClicked = Number(e.target.id);
      if (dots.children[indexOfClicked].dataset.active) {
        return;
      }
      //Set clicked dot as active
      handleChange(indexOfClicked);
      dots.children[indexOfClicked].dataset.active = true;
      //Delete Previous Active
      delete activeDot.dataset.active;
    }

    useEffect(()=>{
        handleChange(slideIndex)
    },[slideIndex])

    return(
        <div className="card-container" onTouchStart={handleTouchStart} onTouchEnd={swipeChangeSlide} data-carousel>
          <button
            className="carouselBtn prev"
            data-carousel-button="prev"
            onClick={changeSlide}
          >
            &#8668;
          </button>
          <button
            className="carouselBtn next"
            data-carousel-button="next"
            onClick={changeSlide}
          >
            &#8669;
          </button>
          <ul data-slides>
            <li key={project.id} className='project-card-list' data-active={project.dataActive}>
                <img
                    className="screenshot"
                    alt={project.imageDesc}
                    src={getImgUrl(project.image)}
                />
                <div className="card-title">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>{project.title}</h2>
                    </a>
                    <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            alt={project.githubRepoDesc}
                            src={github}
                            className="externalLink"
                        />
                    </a>
                </div>
                <p>
                  {project.description}
                </p>
                <div className='pills-container'>
                    {project.pills.map((pill)=>(
                        <div key={pill} id={pill.toString()} className='pill'>
                            {pill}
                        </div>
                    ))
                    }
                </div>
            </li>
          </ul>
          <div className="dotsContainer" data-dots>
            <div className="dot" onClick={goToIndex} id="0" data-active></div>
            <div className="dot" onClick={goToIndex} id="1"></div>
            <div className="dot" onClick={goToIndex} id="2"></div>
            <div className="dot" onClick={goToIndex} id="3"></div>
            <div className="dot" onClick={goToIndex} id="4"></div>
          </div>
        </div>
    )
}

export default Carousel;

