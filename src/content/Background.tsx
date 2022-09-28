import React from 'react'
import { useNavigate } from "react-router";

import Machnies from './Machines'
import Footer from './Footer'
import Services from './Services'
import AboutUs from './AboutUs'
import ContactForm from './ContactForm'
import WorkWithUs from './WorkWithUs';
import Map from './Map';

import { useTranslation } from 'react-i18next';


const Background = () => {

  const navigate = useNavigate()

  const { t } = useTranslation()

  return (
    <div className=" bg-black">
      <div id='home' className="flex justify-center">
            <span className="z-10 absolute  m-20 p-5 lg:m-28">
              <p className="text-4xl text-white text-center font-bold flex justify-center lg:text-5xl"> {t('welcome')} </p>
              <p className="text-base text-white text-center font-bold flex mt-2 justify-center lg:text-lg"> {t('subtitle')} </p>
            </span>
        </div>

        {/* ZASTANOW SIE NAD SENSEM KODU PONIZEJ (BACGROUNDU )  MOZNA ZAMIENIC ZAMIAST POZYCJI ABSOLUTE UZYC DISPLAY GRID */}
        <section className="absolute bg-black "  id='bg-img'>
          <img src='./main2.jpg' alt='Machine' className="saturate-50 h-screen object-cover w-screen  opacity-70" id='main_img'></img>
        
          <div className="bg-white py-10 ">
            <Machnies />
          </div>

          <div className="bg-white border-none">
            <Services />
          </div>

          <div id='aboutUs' className="bg-white border-none flex justify-center w-full">
            <AboutUs/>
          </div>
          
          <div id='work' className="bg-white py-8 flex justify-center flex-wrap gap-5">
            <WorkWithUs />
            <ContactForm />     
          </div>

          <div className="py-10 pt-16 bg-zinc-100 flex justify-center flex-wrap">
            <Map />
          </div>

          <Footer />

          </section>

    </div>
  )
}

export default Background