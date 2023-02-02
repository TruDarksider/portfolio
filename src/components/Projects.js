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
                    <h2>Project 2</h2>
                    <p>This is a short description. It's just a couple of sentences</p>
                </div>
                <div className='project-card'>
                    <img alt='' src={warlock}/>
                    <h2>Project 3</h2>
                    <p>This is a short description. It's just a couple of sentences</p>
                </div>
                <div className='project-card'>
                    <img alt='' src={warlock}/>
                    <h2>Project 4</h2>
                    <p>This is a short description. It's just a couple of sentences</p>
                </div>
                <div className='project-card'>
                    <img alt='' src={warlock}/>
                    <h2>Project 5</h2>
                    <p>This is a short description. It's just a couple of sentences</p>
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