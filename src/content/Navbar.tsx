import React, {useState} from 'react'
import {MenuOutlined} from '@ant-design/icons'
import Features from './Services'
import { useNavigate } from "react-router";

const Navbar = () => {

  const navigate = useNavigate()

    const [lang, setLang] = useState("PL")

    const handleClick = (e: any) => {
      e.preventDefault()
      const target = e.target.getAttribute('href')
      const location = document.querySelector(target).offsetTop
      window.scrollTo({
        left: 0,
        top: location - 60
      })
    }

  return (
    <div>
        <div id='NavBar' className="shadow-md shadow-gray-700 z-30 bg-white fixed top-0 w-full sm:h-20 lg:h-24  flex items-center">      

        <div className="flex sm:gap-5 gap-1 mx-2 md:mx-5 lg:mx-20">

          <div className="w-14 h-full sm:w-16 lg:w-24">
            <img src='./black_logo2.jpeg' alt='Logo Befama' className="rounded-full w-14 h-14 m-1 sm:w-16 sm:h-16 lg:w-full lg:h-full"></img>
          </div>

            <div className="flex items-center font-medium text-black sm:text-lg md:text-xl md:ml-10 lg:ml-20 lg:gap-5">

              <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3 hidden sm:block"><a href='#home' onClick={() => navigate("/")}>Home</a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3"><a href="#services" onClick={(e) => handleClick(e)}>Usługi</a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3"><a href="#work" onClick={(e) => handleClick(e)}>Kontakt</a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3 hidden md:block"><a href="#work" onClick={(e) => handleClick(e)}>Kariera</a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3 hidden md:block"><a href="#Machines" onClick={(e) => handleClick(e)}>Maszyny</a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3 hidden lg:block w-28"><a href="#aboutUs" onClick={(e) => handleClick(e)} className="">O nas</a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 

            </div>

           
        </div>
        <div className="flex justify-end h-full w-full mx-5 items-center md:mx-5 lg:mx-20">

            <div className="dropdown dropdown-hover mr-2 sm:mx-2" id="dropdown Menu"> 
              <label className="sm:ml-10"><MenuOutlined  style={{fontSize:"1.5rem", cursor:'pointer'}}/></label> 
              <ul className="dropdown-content p-2 rounded -left-10 sm:-left-0 mt-1 w-28 bg-white text-center shadow-xl border-t">
                <li className="hover:bg-gray-200 duration-200 py-3 rounded"><a onClick={() => navigate("/")}>Home</a></li>
                <li className="hover:bg-gray-200 duration-200 p-3 rounded"><a href="#aboutUs" onClick={(e) => handleClick(e)}>O nas</a></li>
                <li className="hover:bg-gray-200 duration-200 p-3 rounded"><a href="#work" onClick={() => navigate("/Work")} >Kariera</a></li>
                <li className="hover:bg-gray-200 duration-200 p-3 rounded"><a href="#Machines" onClick={(e) => handleClick(e)}>Maszyny</a></li>
                <li className="hover:bg-gray-200 duration-200 p-3 rounded"><a href="#services" onClick={(e) => handleClick(e)} >Usługi</a></li>
                <li className="hover:bg-gray-200 duration-200 py-3 rounded"><a>Linie produkcyjne</a></li>
                <li className="hover:bg-gray-200 duration-200 p-3 rounded"><a href="#work" onClick={(e) => handleClick(e)}>Kontakt</a></li>
                <li className="hover:bg-gray-200 duration-200 p-3 rounded"><a>Multimedia</a></li>
              </ul>
            </div>

            <div className="dropdown dropdown-hover cursor-pointer flex self-center sm:ml-10 lg:ml-20" id="Lang"> 
                <label className="flex justify-self-end w-8 h-full lg:w-11"><img src={`./${lang}.png`} alt="current flag" className="w-8 border lg:w-11"/></label> 
                <ul className="dropdown-content menu p-1 shadow-inner drop-shadow-md bg-base-100 rounded w-16 text-xl -left-5 m-1 mt-5 md:mt-6">
                  <li><a onClick={() => setLang("DE")}><img alt="DE" src="./DE.png" className='border'/></a></li>
                  <li><a onClick={() => setLang("PL")}><img alt="PL" src="./PL.png" className='border'/></a></li>
                  <li><a onClick={() => setLang("RUS")}><img alt="RUS" src="./RUS.png" className='border'/></a></li>
                  <li><a onClick={() => setLang("ANG")}><img alt="ANG" src="./ANG.png" className='border'/></a></li>
                </ul>
            </div>

        </div>
        
      </div>

    </div>
  )

}

export default Navbar