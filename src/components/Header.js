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
          <div className="link">About Me</div>
          <div className="link">Projects</div>
          <div className="link">Contact</div>
        </div>
      </div>
    );
}

export default Header;