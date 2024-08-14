import workHistory from '../work.json'

const Resume = () => {
return(
    <div className="pt-16 bg-my-red text-my-white min-h-dvh">
        <h1>Work History</h1>
        <div>
            {workHistory.map((job)=>(
                <div key={job.id}>
                    <h2>{job.title} - 
                        <p>{job.location}</p>
                    </h2>
                    <h3>{job.company}</h3>
                    <p>{job.dates}</p>
                    <p>{job.desc}</p>
                </div>
            ))}
        </div>
    </div>
)
}

export default Resume;