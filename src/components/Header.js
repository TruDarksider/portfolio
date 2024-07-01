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
      <div className="flex sticky bg-white">
        <div className="flex items-center">
          <img className="h-12 w-auto" alt="Warlock symbol from Destiny 2 which Tyler frequently plays" src={warlock} />
          <div >Tyler Hopkin</div>
        </div>
        <div className="flex items-center space-x-16">
          <a href='#about'>About Me</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    );
}

export default Header;