import '../stylesheets/Footer.css'

function Footer(){
    return (
      <div className="bg-my-red text-my-white flex flex-col items-center">
        <div className='flex flex-col items-start content-center w-11/12 max-w-xl lg:max-w-7xl'>
          <h1 className='text-xl'>Let's talk about working together!</h1>
          <span>406.696.7640</span>
          <span>tyler.hopkin12@gmail.com</span>
          <span>Seattle, WA</span>
          <span><br/></span>
          <span className='text-xs'>Warlock class icon from Destiny 2, a game made by BUNGiE. Github and LinkedIn icons from their samely titled companies.</span>
        </div>
      </div>
    );
}

export default Footer;