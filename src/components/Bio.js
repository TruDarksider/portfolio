import '../stylesheets/Bio.css'
import warlock from '../D2Warlock.png';
import headshot from '../images/editedHeadshot.png'

function Bio(){

    return (
      <div className='flex flex-col items-center bg-my-blue h-dvh'>
      <div className="pt-16 flex flex-col items-center text-xl max-w-7xl sm:flex-row gap-2 pb-4 sm:pl-4">
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
              <a href="https://github.com/TruDarksider" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className='h-10 w-auto'>
                  <g fill="#ffff">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tylerhopkin/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto fill-my-white" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              </a>
            </li>
            <li>
              <a href="https://www.bungie.net/7/en/User/Profile/3/4611686018485783402?bgn=TruDarksider" target="_blank" rel="noreferrer">
                <img
                  alt="Destiny 2 Warlock class icon: three equilateral triangles overlapping to form 3 peaks sharing a base."
                  src={warlock}
                  className="h-10 w-auto invert"
                />
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    );
}

export default Bio;