import "../stylesheets/Header.css";
import warlock from "../D2Warlock.png";

function Header() {
    return (
      <div className="header sticky">
        <div className="meContainer">
          <img className="pfp" alt="Headshot of Tyler Hopkin" src={warlock} />
          <div className="name">Tyler Hopkin</div>
        </div>
        <div className="linkContainer">
          <a className="link" href='#about'>About Me</a>
          <a className="link" href='#projects'>Projects</a>
          <a className="link" href='#contact'>Contact</a>
        </div>
      </div>
    );
}

export default Header;