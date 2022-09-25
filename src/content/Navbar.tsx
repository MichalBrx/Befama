import React, {useState, useEffect} from 'react'
import {MenuOutlined} from '@ant-design/icons'
import {AiOutlineYoutube} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'
import Features from './Services'
import { useNavigate } from "react-router";

const Navbar = () => {

  const navigate = useNavigate()

    const [lang, setLang] = useState("PL")

    const handleClick = (e: any) => {
      navigate("/")
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
        <div id='NavBar'  className={"shadow-md shadow-gray-700 z-30 bg-white fixed top-0 w-full sm:h-20 flex items-center duration-200"}>      

        <div className="flex sm:gap-5 gap-1 mx-2 md:mx-5 lg:mx-20">

          <div className="w-14 h-full sm:w-16 lg:w-20">
            <img  src='./Befama.jpeg' alt='Logo Befama' className="rounded-full w-14 h-14 m-1 sm:w-16 sm:h-16 lg:w-full lg:h-full"></img>
          </div>

            <div className="flex items-center font-medium text-black sm:text-lg md:text-xl md:ml-10 lg:ml-20 lg:gap-5">

              <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3 hidden sm:block"><a href='#home' onClick={(e) => handleClick(e)}>Home</a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3"><a href="#services" onClick={(e) => handleClick(e)}>Usługi</a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3"><a href="#work" onClick={(e) => handleClick(e)}>Kontakt</a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3 hidden md:block"><a href="#work" onClick={(e) => handleClick(e)}>Kariera</a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3 hidden md:block"><a href="#Machines" onClick={(e) => handleClick(e)}>Maszyny</a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="cursor-pointer group transition-all duration-300 p-2 sm:p-3 hidden lg:block w-20"><a href="#aboutUs" onClick={(e) => handleClick(e)} >O nas</a><span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 

            </div>

           
        </div>
        <div className="flex justify-end h-full w-full mx-5 items-center md:mx-5 lg:mx-20">


            <div className="dropdown dropdown-hover mr-2 sm:mx-2 lg:hidden" id="dropdown Menu"> 
              <label className="sm:ml-10"><MenuOutlined  style={{fontSize:"1.5rem", cursor:'pointer'}}/></label> 
              <ul className="dropdown-content p-2 rounded -left-10 sm:-left-0 mt-1 w-28 bg-white text-center shadow-xl border-t">
                <li className="hover:bg-gray-200 duration-200 py-3 rounded sm:hidden"><a href='#home' onClick={(e) => handleClick(e)}>Home</a></li>
                <li className="hover:bg-gray-200 duration-200 p-3 rounded"><a href="#aboutUs" onClick={(e) => handleClick(e)}>O nas</a></li>
                <li className="hover:bg-gray-200 duration-200 p-3 rounded md:hidden"><a href="#work" onClick={(e) => handleClick(e)} >Kariera</a></li>
                <li className="hover:bg-gray-200 duration-200 p-3 rounded md:hidden"><a href="#Machines" onClick={(e) => handleClick(e)}>Maszyny</a></li>

                <li className="hover:bg-gray-200 duration-200 py-3 rounded"><a>Linie produkcyjne</a></li>

              </ul>
            </div>

              <a href="https://www.youtube.com/user/1851Befama" target="_blank"><AiOutlineYoutube className="w-7 h-7 mx-3 ml-20 hidden lg:block" /></a>
              <a href="https://www.google.com/maps/place/P%C3%B3%C5%82nocna+212,+43-378+Kalna,+Poland/@49.7120509,19.1081515,15.5z/data=!4m5!3m4!1s0x47142728491cc8d5:0xf37a9d1b0ccec16e!8m2!3d49.7129164!4d19.1097307?hl=en" target="_blank"><FiMapPin className="w-7 h-7 mx-3 hidden lg:block"/></a>

            <div className="dropdown dropdown-hover cursor-pointer flex self-center sm:ml-5" id="Lang"> 
                <label className="flex justify-self-end w-8 h-full lg:w-11 hover:scale-125 duration-200"><img src={`./${lang}.png`} alt="current flag" className="w-8 border lg:w-11"/></label> 
                <ul className="dropdown-content menu p-1 shadow-inner drop-shadow-md bg-base-100 rounded w-16 text-xl -left-5 m-1 mt-5 md:mt-6 lg:w-20 lg:mt-7">
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