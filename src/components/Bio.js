import '../stylesheets/Bio.css'
import warlock from '../D2Warlock.png';
import github from '../github-original.svg'
import headshot from '../images/editedHeadshot.png'

function Bio(){

    return (
      <div className="bio" id="about">
        {/* <div className='nameAndPic'>
                <h1>Tyler Hopkin</h1>
                <img alt='Headshot of Tyler Hopkin' src={warlock} />
            </div> */}
        <img
          alt="Headshot of Tyler Hopkin"
          src={headshot}
          className="headshot"
        />
        <div className="bioText">
          <h2>About Me</h2>
          <p>
            Loves playing games of all sorts. Currently playing Destiny 2, Diablo 4, Overwatch, and halfway through a Dice Throne: Adventure campaign. Earned a Bachelor's of Science in Applied Physics
            (Acoustics Emphasis) from Brigham Young University. Spent 6 years as
            an Audio/Video technician but now seeks respite among the math and
            logics of a web/app developer career.{" "}
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
      </div>
    );
}

export default Bio;