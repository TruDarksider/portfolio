import '../stylesheets/Projects.css'
import mbScreenshot from '../images/MessageBoard.png'
import ktScreenshot from '../images/KnightTravails.png'
import shopScreenshot from '../images/ShopScreenshot.png'
import photoScreenshot from '../images/PhotoAppScreenShot'
import easScreenshot from '../images/EtchASketch.png'
import github from '../github-original.svg'

function Projects() {
  let xStart = null;

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
    const slides = e.target
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const dots = document.querySelector("[data-dots]");

    const activeSlide = slides.querySelector("[data-active]");
    const activeDot = dots.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }
    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    dots.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    delete activeDot.dataset.active;
  }

  const changeSlide = (e) => {
    //const buttons = document.querySelectorAll('[data-carousel-button]')
    
    //buttons.forEach(button => {
      const offset = e.target.classList.contains("next") ? 1 : -1;
      //const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const slides = e.target
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const dots = document.querySelector('[data-dots]');

      const activeSlide = slides.querySelector("[data-active]");
      const activeDot = dots.querySelector('[data-active]')
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      
      if (newIndex < 0) {
        newIndex = slides.children.length - 1;
      }
      if (newIndex >= slides.children.length) {
        newIndex = 0;
      }

      slides.children[newIndex].dataset.active = true;
      dots.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
      delete activeDot.dataset.active;
  //})
  }
  
  const goToIndex = (e) => {
    //Store current active
    const slides = e.target
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const dots = document.querySelector("[data-dots]");
    const activeSlide = slides.querySelector("[data-active]");
    const activeDot = dots.querySelector("[data-active]");
    //Find index of clicked dot
    let indexOfClicked = Number(e.target.id);
    if (dots.children[indexOfClicked].dataset.active) {
      return;
    }
    //Set clicked dot as active
    slides.children[indexOfClicked].dataset.active = true;
    dots.children[indexOfClicked].dataset.active = true;
    //Delete Previous Active
    delete activeSlide.dataset.active;
    delete activeDot.dataset.active;
  }

    return (
      <div className="project-area" id="projects">
        <h1>Projects</h1>
        <p>
          Title is a link to a live deployment, github image links to code. All
          links open in a new tab.
        </p>
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
            <li className="project-card" data-active>
              <img
                className="screenshot"
                alt="Screenshot of the Message Board project"
                src={mbScreenshot}
              />
              <div className="card-title">
                <a
                  href="https://messageboard-production-cd70.up.railway.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>Message Board</h2>
                </a>
                <a
                  href="https://github.com/TruDarksider/messageboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="GitHub logo linking to Message Board repository"
                    src={github}
                    className="externalLink"
                  />
                </a>
              </div>
              <p>
                Create an account and post a message to a public forum. Become a
                Member using "plsLetMePost1Message". Reach out for an Admin
                password. Uses Express, passport, Node, MongoDB. Hosted using
                Railway.
              </p>
            </li>
            <li className="project-card">
              <img
                className="screenshot"
                alt="Screenshot of Photo Tagging App project"
                src={photoScreenshot}
              />
              <div className="card-title">
                <a
                  href="https://trudarksider.github.io/photo-tagging-app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>Match the Color</h2>
                </a>
                <a
                  href="https://github.com/TruDarksider/photo-tagging-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="GitHub logo linking to Photo Tagging App repository"
                    src={github}
                    className="externalLink"
                  />
                </a>
              </div>
              <p>
                Find the three randomly selected colors among the pixels. Uses
                React as a framework with Firebase as a backend for creating and
                holding the answer key.
              </p>
            </li>
            <li className="project-card">
              <img
                alt="Screenshot of Etch-A-Sketch project"
                src={easScreenshot}
                className="screenshot"
              />
              <div className="card-title">
                <a
                  href="https://trudarksider.github.io/etch-a-sketch/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>Etch-A-Sketch</h2>
                </a>
                <a
                  href="https://github.com/TruDarksider/etch-a-sketch"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="GitHub logo linking to Etch-a-Sketch repository"
                    src={github}
                    className="externalLink"
                  />
                </a>
              </div>
              <p>
                Use your mouse to mimic a classic toy inside a browser window.
                Has the ability to change canvas size as well as drawing color. Showcases DOM manipulation with user selections. 
              </p>
            </li>
            <li className="project-card">
              <img
                className="screenshot"
                id="ktScreenshot"
                alt="Screenshot of Knight Travails project"
                src={ktScreenshot}
              />
              <div className="card-title">
                <a
                  href="https://trudarksider.github.io/knight-travails/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>Knight Travails</h2>
                </a>
                <a
                  href="https://github.com/TruDarksider/knight-travails"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="GitHub logo linking to Knight Travails repository"
                    src={github}
                    className="externalLink"
                  />
                </a>
              </div>
              <p>
                Finds the shortest route for a knight to reach a particular spot
                on a chessboard using a graph data structure.
                Board origin is [0,0] in the top left and with [7,7]
                in the bottom right. Refresh the page for a new start and end point.
              </p>
            </li>
            <li className="project-card">
              <img
                className="screenshot"
                alt="Screenshot of Shop project"
                src={shopScreenshot}
              />
              <div className="card-title">
                <a
                  href="https://trudarksider.github.io/shopping-cart/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>Shop</h2>
                </a>
                <a
                  href="https://github.com/TruDarksider/shopping-cart"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="GitHub logo linking to Shop repository"
                    src={github}
                    className="externalLink"
                  />
                </a>
              </div>
              <p>Pretend to go shopping for made up items. A React app showcasing variable passing between components.</p>
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
      </div>
    );
}

export default Projects;