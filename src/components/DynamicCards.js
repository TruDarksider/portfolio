import github from '../github-original.svg'
import projects from '../data.json'

function DynamicCards() {
    function getImgUrl(img){
        let image = require('../images/'+img)
        return image
    }
    return(
        /*<div>
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
        </div>*/
        <div>
            <ul className="flex flex-col gap-4 items-center">
                {projects.map((project)=>(
                    <li key={project.id} className=' max-w-5xl shadow-md flex flex-col sm:flex-row items-center p-2 bg-my-white'>
                        <img
                            className="max-h-64 w-auto"
                            alt={project.imageDesc}
                            src={getImgUrl(project.image)}
                        />
                        <div>
                        <div className="flex flex-col items-center justify-center pb-6">
                            <h2 className='text-xl text-my-blue'>{project.title}</h2>
                            <div className='flex gap-1 items-center'>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className='text-my-black'
                                >
                                live site | 
                                </a>
                                <a
                                    href={project.githubRepo}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                <img
                                    alt={project.githubRepoDesc}
                                    src={github}
                                    className="h-5 w-auto"
                                />
                                </a>
                            </div>
                        </div>
                        <p className='text-left'>
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
                ))}
            </ul>
        </div>
)

}

export default DynamicCards;