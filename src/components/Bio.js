import '../stylesheets/Bio.css'
import warlock from '../D2Warlock.png';
import github from '../github-original.svg'
import headshot from '../images/editedHeadshot.png'

function Bio(){

    return (
      /*<div className="bio" id="about">
        <img
          alt="Headshot of Tyler Hopkin"
          src={headshot}
          className="headshot"
        />
        <div className="bioText">
          <h2>Hey! I'm Tyler.</h2>
          <p>
            I'm a software engineer specializing in web and app development. As a former audio engineer, I discovered a love for energizing an audience; a year with The Odin Project later, and I now create fun digital experiences that bring even more people joy.
          
          </p>
          <p>
            I enjoy learning new things and challenging myself. While I'm currently working with Javascript and React, I've previously played around in C++, Unreal Engine, and Wwise.

          </p>
          
          <ul className="external-bio-links">
            <li>
              <a href="https://github.com/TruDarksider">
                <img
                  alt="GitHub logo linking to Tyler's github profile"
                  src={github}
                  className="externalLink"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tylerhopkin/">
                <img
                  alt="LinkedIn logo linking to Tyler's LinkedIn profile"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                  className="externalLink"
                />
              </a>
            </li>
            <li>
              <a href="https://www.bungie.net/7/en/User/Profile/3/4611686018485783402?bgn=TruDarksider">
                <img
                  alt="Destiny 2 Warlock class icon linking to Tyler's Destiny 2 character"
                  src={warlock}
                  className="externalLink"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>*/
      <div className="pt-16 flex flex-col items-center bg-my-blue text-xl sm:flex-row gap-2 pb-4 md:px-64">
        <img
          alt="Headshot of Tyler Hopkin"
          src={headshot}
          className="bg-my-green rounded-2xl shadow-md shadow-my-orange max-h-96 w-auto"
        />
        <div className=" text-my-white px-6">
          <h2 className='text-2xl text-center drop-shadow-md py-4'>Hey! I'm Tyler.</h2>
          <p className='pb-4'>
            I'm a software engineer specializing in web and app development. As a former audio engineer, I discovered a love for energizing an audience; now I create fun digital experiences either that bring even more people joy through personal projects and others' open source ones.
          </p>
          <p>
            I enjoy learning new things and challenging myself. While I'm currently working with Javascript and React, I've previously played around in C++, Python, Unreal Engine, and Wwise.
          </p>
          
          <ul className="flex justify-center gap-4 py-4">
            <li>
              <a href="https://github.com/TruDarksider">
                <img
                  alt="GitHub logo linking to Tyler's github profile"
                  src={github}
                  className="h-10 w-auto"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tylerhopkin/">
                <img
                  alt="LinkedIn logo linking to Tyler's LinkedIn profile"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                  className="h-10 w-auto"
                />
              </a>
            </li>
            <li>
              <a href="https://www.bungie.net/7/en/User/Profile/3/4611686018485783402?bgn=TruDarksider">
                <img
                  alt="Destiny 2 Warlock class icon linking to Tyler's Destiny 2 character"
                  src={warlock}
                  className="h-10 w-auto"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Bio;