import '../stylesheets/Projects.css'
import warlock from '../D2Warlock.png';

function Projects(){

    return (
        <div className='project-area'>
            <h1>My Work</h1>
            <div className='card-container'>
                <div className='project-card'>
                    <img alt='' src={warlock}/>
                    <h2>Project 1</h2>
                    <p>This is a short description. It's just a couple of sentences</p>
                </div>
                <div className='project-card'>
                    <img alt='' src={warlock}/>
                    <h2>Photo Tagging App</h2>
                    <p>Find the target in the picture. Uses Firebase as a backend for holding the answerkey.</p>
                </div>
                <div className='project-card'>
                    <img alt='' src={warlock}/>
                    <h2>Etch-A-Sketch</h2>
                    <p>Use your mouse to mimic a classic toy inside a browser window.</p>
                </div>
                <div className='project-card'>
                    <img alt='' src={warlock}/>
                    <h2>Knight Travails</h2>
                    <p>Find the shortest route for a knight to reach a particular spot on a chessboard. Uses a graph data structure to plot the course.</p>
                </div>
                <div className='project-card'>
                    <img alt='' src={warlock}/>
                    <h2>Shop</h2>
                    <p>Pretend to go shopping for made up items.</p>
                </div>
                <div className='project-card'>
                    <img alt='' src={warlock}/>
                    <h2>Project 6</h2>
                    <p>This is a short description. It's just a couple of sentences</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;