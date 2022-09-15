import React, {useState} from 'react'
import {MenuOutlined} from '@ant-design/icons'
import Machnies from './Machines'


const Navbar = () => {

    const [lang, setLang] = useState("PL")

  return (
    <div>
        <div id='NavBar' className="shadow-current shadow-md z-30 bg-white fixed top-0 w-full">      

        <div className="flex gap-5 mx-2">

          <div className="">
            <img src='./black_logo2.jpeg' alt='Logo Befama' className="rounded-full w-14 h-14 m-1"></img>
          </div>

            <div className="flex items-center font-medium text-black">
            <div className="cursor-pointer group transition-all duration-300 p-3 truncate hidden">O nas<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="cursor-pointer group transition-all duration-300 p-3">Usługi<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="cursor-pointer group transition-all duration-300 p-3">Kontakt<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black"></span></div> 
              <div className="dropdown dropdown-hover mx-2" id="dropdown Menu"> 
                <label className=""><MenuOutlined  style={{fontSize:"1.5rem", cursor:'pointer'}}/></label> 
                <ul className="dropdown-content p-2 rounded -left-10 pt-1 w-28 bg-white text-center">
                  <li className="hover:bg-gray-200 duration-200 p-3 rounded"><a>O nas</a></li>
                  <li className="hover:bg-gray-200 duration-200 p-3 rounded"><a>Kariera</a></li>
                  <li className="hover:bg-gray-200 duration-200 p-3 rounded"><a>Maszyny</a></li>
                  <li className="hover:bg-gray-200 duration-200 p-3 rounded"><a>Usługi</a></li>
                  <li className="hover:bg-gray-200 duration-200 py-3 rounded"><a>Linie produkcyjne</a></li>
                  <li className="hover:bg-gray-200 duration-200 p-3 rounded"><a>Aktualności</a></li>
                  <li className="hover:bg-gray-200 duration-200 p-3 rounded"><a>Multimedia</a></li>
                </ul>
              </div>

            </div>

            <div className="dropdown dropdown-hover cursor-pointer flex self-center justify-self-end" id="Lang"> 
                <label className="flex justify-self-end"><img src={`./${lang}.png`} alt="current flag" className="w-8 border"/></label> 
                <ul className="dropdown-content menu p-1 shadow-inner drop-shadow-md bg-base-100 rounded w-16 text-xl -left-5 m-1 mt-5">
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