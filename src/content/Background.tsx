import Machnies from './Machines'
import Footer from './Footer'
import Services from './Services'
import AboutUs from './AboutUs'
import ContactForm from './ContactForm'
import WorkWithUs from './WorkWithUs';
import Map from './Map';

import { useTranslation } from 'react-i18next';


const Background = () => {



  const { t } = useTranslation()

  return (
    <div className=" bg-black">
      <div id='home' className="flex justify-center">
            <span className="z-10 absolute pt-16 m-20 p-5 lg:m-28">
              <p className="text-4xl sm:text-5xl md:text-6xl text-white text-center font-bold  justify-center"> {t('welcome')} </p>
              <p className="text-lg sm:text-xl md:text-2xl text-white text-center font-bold flex mt-2 justify-center"> {t('subtitle')} </p>
            </span>
        </div>

        <section className="absolute bg-black "  id='bg-img'>
          <img src='./main.webp' alt='Machine' className="saturate-50 h-screen object-cover w-screen  opacity-70" id='main_img'></img>
        
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