import '../stylesheets/Projects.css'
import mbScreenshot from '../images/MessageBoard.png'
import ktScreenshot from '../images/KnightTravails.png'
import shopScreenshot from '../images/ShopScreenshot.png'
import photoScreenshot from '../images/PhotoAppScreenShot'
import easScreenshot from '../images/EtchASketch.png'
import github from '../github-original.svg'

function Projects(){

    return (
      <div className="project-area">
        <h1>My Work</h1>
        <p>
          Title is a link to a live deployment, github image links to code. All
          links open in a new tab.
        </p>
        <div className="card-container">
          <div className="project-card">
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
              Member using "plsLetMePost1Message". Reach out for admin password.
              Uses Express, passport, Node, MongoDB. Hosted using Railway.
            </p>
          </div>
          <div className="project-card">
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
                <h2>Photo Tagging App</h2>
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
              holding the answerkey.
            </p>
          </div>
          <div className="project-card">
            <img alt="Screenshot of Etch-A-Sketch project" src={easScreenshot} className='screenshot' />
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
              Use your mouse to mimic a classic toy inside a browser window. Has the ability to change canvas size as well as drawing color.
            </p>
          </div>
          <div className="project-card">
            <img
              className="screenshot"
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
              on a chessboard. Uses a graph data structure to plot the course.
              Board origin is [0,0] in the top left and goes to [7,7] located in
              the bottom right.
            </p>
          </div>
          <div className="project-card">
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
            <p>Pretend to go shopping for made up items.</p>
          </div>
        </div>
      </div>
    );
}

export default Projects;