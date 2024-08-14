import "../stylesheets/Header.css";
import warlock from "../D2Warlock.png";

function Header() {
    return (
      <div className="bg-my-white z-10 sticky flex justify-center">
        <div className="flex items-center justify-center text-xl lg:text-2xl py-1 w-11/12">
          <div className="flex justify-center basis-1/2 items-center">
            <img className="h-8 md:h-12 w-auto" alt="Warlock symbol from Destiny 2: three equilateral triangles slightly offset from one another to the left and right" src={warlock} />
            <div className="hidden sm:block">Tyler Hopkin</div>
          </div>
          <div className="text-my-blue basis-1/2 flex items-center gap-4 md:gap-8">
            <a className="basis-1/3" href='/'>Projects</a>
            <a className="basis-1/3" href='#/about'>About Me</a>
            <a className="basis-1/3" href='#/resume'>Resume</a>
          </div>
        </div>
      </div>
    );
}

export default Header;