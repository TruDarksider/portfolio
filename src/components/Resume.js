import workHistory from '../work.json'

const Resume = () => {
return(
    <div className="flex flex-col items-center pt-16 px-16 bg-my-red text-my-white min-h-dvh">
        <div className='max-w-7xl'>
            <h1 className='text-center'>Work History</h1>
            <div className='flex flex-col gap-6'>
                {workHistory.map((job)=>(
                    <div key={job.id}>
                        <div>
                            <div className='flex justify-between'>
                                <span>{job.title}</span>
                                <span>{job.location}</span>
                            </div>
                            <div className='flex justify-between'> 
                                <span>{job.company}</span>
                                <span>{job.dates}</span>
                            </div>
                        </div>
                        <p>{job.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}

export default Resume;