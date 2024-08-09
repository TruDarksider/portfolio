import mbScreenshot from '../images/MessageBoard.png'
import ktScreenshot from '../images/KnightTravails.png'
import shopScreenshot from '../images/ShopScreenshot.png'
import photoScreenshot from '../images/PhotoAppScreenShot.png'
import easScreenshot from '../images/EtchASketch.png'
import github from '../github-original.svg'

function Cards() {

    return(
        <div>
            <ul className='noncarousel'>
            <li className="project-card-list">
              <img
                className="screenshot"
                alt="Preview of the Message Board project"
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
            <li className="project-card-list">
              <img
                className="screenshot"
                alt="Preview of the Match the Color project"
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
            <li className="project-card-list">
              <img
                alt="Preview of the Etch-A-Sketch project"
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
            <li className='updating'>
                <div className='project-card-list'>
              <img
                className="screenshot"
                id="ktScreenshot"
                alt="Preview of the Knight Travails project"
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
                in the bottom right. Now with TypeScript! User input currently in development.
              </p>
              </div>
              <h3 className='newlyUpdated'>Being Updated!</h3>
            </li> 
            <li className="project-card-list">
              <img
                className="screenshot"
                alt="Preview of the Shop project"
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
        </div>
    )
}

export default Cards;