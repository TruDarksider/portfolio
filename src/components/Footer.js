import '../stylesheets/Footer.css'

function Footer(){
    return (
      /*<div className="footer" id="contact">
        <h1>Let's talk about working together!</h1>
        <span>406.696.7640</span>
        <br />
        <span>tyler.hopkin12@gmail.com</span>
        <br />
        <span>Seattle, WA</span>
        <br />
        <br />
        <span id="bottom">Warlock class icon from Destiny 2, a game made by BUNGiE. Github and LinkedIn icons from their samely titled companies.</span>
      </div> */
      <div className="bg-my-red text-my-white text-left px-64">
        <h1 className='text-xl'>Let's talk about working together!</h1>
        <span>406.696.7640</span>
        <br />
        <span>tyler.hopkin12@gmail.com</span>
        <br />
        <span>Seattle, WA</span>
        <br />
        <br />
        <span className='text-xs'>Warlock class icon from Destiny 2, a game made by BUNGiE. Github and LinkedIn icons from their samely titled companies.</span>
      </div>
    );
}

export default Footer;