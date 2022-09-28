import { t } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'

import Footer from '../content/Footer'
import SubNavbar from '../content/SubNavbar'
import ScrollToTop from '../functions/ScrollToTop'



const Serv = () => {

const { t } = useTranslation()

  return (
    <div id='serv' >
        <ScrollToTop />
        <div className="h-16">
            <SubNavbar/>
        </div>
        <div className='flex justify-center m-1 lg:mt-10'>
            <div className="flex flex-wrap max-w-lg justify-center my-8">
                <h3 className="text-3xl font-semibold text-center"> {t("serv_title")} </h3>
                <div className="">
  

                    <div className='p-2 flex flex-wrap justify-center sm:justify-start shadow-lg border-t rounded-lg mt-5 text-center'>
                        <img className="rounded-lg w-40"  src="./walek.jpg"  alt="Roller" />
                        <h2 className="font-semibold text-xl p-1 mt-3 items-center max-w-xs w-full"> {t("serv1")} </h2>
                    </div>

                    <div className='p-2 flex flex-wrap justify-center sm:justify-start shadow-lg border-t rounded-lg mt-5 text-center'>
                        <img className="rounded-lg w-40"  src="./tasma.jpg"  alt="Roller" />
                        <h2 className="font-semibold text-xl p-1 mt-3 items-center max-w-xs w-full"> {t("serv2")} </h2>
                    </div>
                    <div className='p-2 flex flex-wrap justify-center sm:justify-start shadow-lg border-t rounded-lg mt-5 text-center'>
                        <img className="rounded-lg w-40"  src="./szarpak.jpg"  alt="Szarpak" />
                        <h2 className="font-semibold text-xl p-1 mt-3 items-center max-w-xs w-full"> {t("serv3")} </h2>
                    </div>
                    <div className='p-2 flex flex-wrap justify-center sm:justify-startshadow-lg border-t rounded-lg mt-5 text-center'>
                        <img className="rounded-lg w-40"  src="./lejki.jpg"  alt="Roller" />
                        <h2 className="font-semibold text-xl p-1 mt-3 items-center max-w-xs w-full"> {t("serv4")} </h2>
                    </div>
                    <div className='p-2 flex flex-wrap justify-center sm:justify-start shadow-lg border-t rounded-lg mt-5 text-center'>
                        <img className="rounded-lg w-40"  src="./szczelinomierze.jpg"  alt="Szczelinomierz" />
                        <h2 className="font-semibold text-xl p-1 mt-3 items-center max-w-xs w-full"> {t("serv5")} </h2>
                    </div>
                    <div className='p-2 flex flex-wrap justify-center sm:justify-start shadow-lg border-t rounded-lg mt-5 text-center'>
                        <img className="rounded-lg w-32 rotate-90 mx-3"  src="./oprawy.jpg"  alt="Roller" />
                        <h2 className="font-semibold text-xl p-1 mt-3 items-center max-w-xs w-full"> {t("serv6")} </h2>
                    </div>
                    <div className='p-2 flex flex-wrap justify-center sm:justify-start shadow-lg border-t rounded-lg mt-5 text-center'>
                        <img className="rounded-lg w-40"  src="./wilk.jpg"  alt="Roller" />
                        <h2 className="font-semibold text-xl p-1 mt-3 items-center max-w-xs w-full"> {t("serv7")} </h2>
                    </div>

                </div>
               
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Serv