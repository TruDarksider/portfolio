import "../stylesheets/Header.css";
import warlock from "../D2Warlock.png";

function Header() {
    return (
     /*  <div className="header sticky">
        <div className="meContainer">
          <img className="pfp" alt="Warlock symbol from Destiny 2 which Tyler frequently plays" src={warlock} />
          <div className="name">Tyler Hopkin</div>
        </div>
        <div className="linkContainer">
          <a className="link" href='#about'>About Me</a>
          <a className="link" href='#projects'>Projects</a>
          <a className="link" href='#contact'>Contact</a>
        </div>
      </div> */
      <div className="flex sticky bg-my-white place-content-evenly text-xl md:text-2xl z-10 py-1">
        <div className="flex items-center">
          <img className="h-8 md:h-12 w-auto" alt="Warlock symbol from Destiny 2 which Tyler frequently plays" src={warlock} />
          <div className="hidden sm:block">Tyler Hopkin</div>
        </div>
        <div className="text-my-blue flex place-content-evenly items-center gap-4 md:gap-6">
          <a href='about'>About Me</a>
          <a href='/'>Projects</a>
          {/* <a href='contact'>Contact</a> */}
        </div>
      </div>
    );
}

export default Header;