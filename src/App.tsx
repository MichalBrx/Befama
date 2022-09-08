import { useState } from 'react'
import "./index.css"
import {MenuOutlined} from '@ant-design/icons'

import Navbar from './containers/Navbar'
import Background from './containers/Background'
import Machines from './containers/Machines'
import Features from './containers/Features'
import ContactForm from './containers/ContactForm'

function App() {






  return (
    <div className="bg-white">


      {/* <div id='NavBar' className="w-screen h-24 absolute shadow-current shadow-md bg-white z-10 flex justify-evenly xl:h-20 lg:h-16 md:justify-start sm:h-10 xs:w-screen">      

        <div className="flex items-center mx-20 gap-80 lg:flex lg:m-0 lg:gap-10 xl:gap-20 sm:gap-0 sm:grid">

          <div className="block relative">
            <img src='./black_logo2.jpeg' alt='Logo Befama' className="w-24 rounded-full mt-1 ml-5 flex lg:w-12 md:ml-0 xl:w-20"></img>
          </div>

            <div className="flex gap-5 text-2xl font-medium items-center justify-center md:text-lg md:gap-2  lg:text-xl sm:text-base">
              <div className="cursor-pointer group transition-all duration-300 p-3 truncate sm:hidden">O nas<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="cursor-pointer group transition-all duration-300 p-3 xs:hidden">Usługi<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="cursor-pointer group transition-all duration-300 p-3">Kontakt<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="dropdown dropdown-hover hover:scale-125 rounded p-2 transition-all duration-200 cursor-pointer mx-10 items-center" id="dropdown Menu"> 
                <label className="m-1 flex items-center"><MenuOutlined  style={{fontSize:"1.5rem", cursor:'pointer'}}/></label> 
                <ul className="dropdown-content menu p-1 shadow bg-base-100 rounded w-44 text-xl -left-16 lg:w-24 lg:text-lg  lg:-left-6">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>

            </div>

            <div className="dropdown dropdown-hover self-center hover:scale-125 duration-200 cursor-pointer xl:justify-self-start" id="Lang"> 
                <label className="m-1"><img src={`./${lang}.png`} alt="current flag" className="w-12 border"/></label> 
                <ul className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-20 text-xl -left-4 m-1">
                  <li><a onClick={() => setLang("DE")}><img alt="DE" src="./DE.png" className='border'/></a></li>
                  <li><a onClick={() => setLang("PL")}><img alt="PL" src="./PL.png" className='border'/></a></li>
                  <li><a onClick={() => setLang("RUS")}><img alt="RUS" src="./RUS.png" className='border'/></a></li>
                  <li><a onClick={() => setLang("ANG")}><img alt="ANG" src="./ANG.png" className='border'/></a></li>
                </ul>
            </div>

        </div>
      </div>
      <div className='bg-black flex justify-center'>

        <img src='./main2.jpg' alt='Machine' className=" w-screen h-screen opacity-80 saturate-50 object-cover xs:inset-0 xs:w-96" id='main_img'></img>
        <div className="z-10 absolute flex justify-center mt-60 backdrop-blur-sm p-5">
        <span>
          <p className="text-6xl text-white text-center font-bold flex   justify-center md:text-3xl">Witaj w Befamie</p>
          <p className="text-3xl text-white text-center font-bold flex mt-3  justify-center md:text-xl ">Oferujemy nowe uslugi i czesci do naszych maszyn</p>
        </span>
        </div>

      </div>

      <div className="h-20 w-screen"></div>

      <div className="w-screen h-screen relative">
        <div className="bg-black rounded-r-2xl w-96 h-44"></div>
      </div>
 */}



      {/* PHONEEE PHONEEE PHONEEE PHONEEE PHONEEE below */}

      <Navbar/>
      <Background />
      <Features />
      <ContactForm />
        


      {/* <div className="h-20 w-screen bg-white"></div>

      <div className="w-screen h-screen z-20 relative">
        <div className="bg-black rounded-r-2xl w-96 h-44">test</div>
      </div> */}
      
    </div>
  )
}

export default App
