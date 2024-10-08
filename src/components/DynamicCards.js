import projects from '../data.json'

function DynamicCards() {
    function getImgUrl(img){
        let image = require('../images/'+img)
        return image
    }
    return(
        <div>
            <ul className="flex flex-col gap-4 items-center">
                {projects.map((project)=>(
                    <li key={project.id} className=' max-w-xl lg:max-w-7xl shadow-md flex flex-col lg:flex-row items-center p-2 bg-my-white'>
                        <img
                            className="max-h-64 w-auto"
                            alt={project.imageDesc}
                            src={getImgUrl(project.image)}
                        />
                        <div>
                        <div className="flex flex-col items-center justify-center pb-6 pt-4">
                            <h2 className='text-xl text-my-blue'>{project.title}</h2>
                            <div className='flex gap-1 items-center'>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className='text-my-orange'
                                >
                                live site 
                                </a>
                                |
                                <a
                                    href={project.githubRepo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className='text-my-orange'
                                >
                                    repo
                                </a>
                            </div>
                        </div>
                        <p className='text-left pb-4'>
                          {project.description}
                        </p>
                        <div className='flex gap-2 text-sm items-center justify-center pb-4'>
                            {project.pills.map((pill)=>(
                                <div key={pill} id={pill.toString()} className='rounded-3xl p-2'>
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