import github from '../github-original.svg'
import projects from '../data.json'

function DynamicCards() {
    function getImgUrl(img){
        let image = require('../images/'+img)
        return image
    }
    return(
        <div>
            <ul className="noncarousel">
                {projects.map((project)=>(
                    <li key={project.id} className='project-card-list'>
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
                ))}
            </ul>
        </div>
)

}

export default DynamicCards;