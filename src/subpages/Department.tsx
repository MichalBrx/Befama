import React from 'react'
import Footer from '../content/Footer'
import SubNavbar from '../content/SubNavbar'
import ScrollToTop from '../functions/ScrollToTop'

import { useTranslation } from 'react-i18next'

const Department = () => {

    const { t } = useTranslation()

  return (
    <div>
        <ScrollToTop />
        <SubNavbar />
        <div className="mt-24 flex justify-center flex-wrap">
            <div className="flex justify-center text-2xl text-center font-bold my-8 w-full">
                <h1 className="">Kontakt do poszczególnych działów { t('') } </h1> 
            </div>
            <div className="flex flex-wrap justify-center max-w-3xl md:gap-5 mb-10">
                <div className=" m-5 justify-center text-center">
                    <h2 className="mb-10 text-xl font-semibold">Dział Konstrukcyjny</h2>
                    <div className="flex w-full justify-center">
                        <img className="rounded-full h-28 w-28" src="./guy.png" alt='Photo_Kamil'/>
                    </div>
                    <h3 className="my-1 text-lg font-semibold">Czesław Krupa</h3>
                    <h5 className="my-1"><p className="font-semibold">telefon:</p>+48 605 216 970</h5>
                    <h5 className="my-1"><p className="font-semibold">e-mail:</p>cz.krupa@befama.com.pl</h5>
                </div>

                <div className=" m-5 justify-center text-center">
                    <h2 className=" text-xl font-semibold mb-10 ">Dział Sprzedaży</h2>
                    
                    <div className="flex w-full justify-center">
                        <img className="rounded-full h-28 w-28" src="./guy.png" alt='Photo_Kamil'/>
                    </div>
                    <h3 className="my-1 text-lg font-semibold">Marek Janoszek</h3>
                    <h5 className="my-1"><p className="font-semibold">telefon:</p>+48 514 598 117</h5>
                    <h5 className="my-1"><p className="font-semibold">e-mail:</p>m.janoszek@befama.com.pl</h5>
                
                </div>
                <div className=" m-5 justify-center text-center">
                    <h2 className=" text-xl font-semibold mb-10 ">Dział Sprzedaży</h2>
                    
                    <div className="flex w-full justify-center">
                        <img className="rounded-full h-28 w-28" src="./guy.png" alt='Photo_Kamil'/>
                    </div>
                    <h3 className="my-1 text-lg font-semibold">Zbigniew Haj</h3>
                    <h5 className="my-1"><p className="font-semibold">telefon:</p>+48 796 150 368</h5>
                    <h5 className="my-1"><p className="font-semibold">e-mail:</p>z.haj@befama.com.pl</h5>
                
                </div>

                <div className=" m-5  justify-center text-center">
                    <h2 className=" text-xl font-semibold mb-10 ">Automatyka - serwis</h2>
                    <div className="flex w-full justify-center">
                        <img className="rounded-full h-28 w-28" src="./guy.png" alt='Photo_Kamil'/>
                    </div>
                    <h3 className="my-1 text-lg font-semibold">Kamil Żmijowski</h3>
                    <h5 className="my-1"><p className="font-semibold">telefon:</p>+48 600 005 479 </h5>
                    <h5 className="my-1"><p className="font-semibold">e-mail:</p>k.zmijowski@befama.com.pl</h5>
                </div>

                <div className=" m-5  justify-center text-center">
                    <h2 className=" text-xl font-semibold mb-10 ">Sekretariat</h2>
                    <div className="flex w-full justify-center">
                        <img className="rounded-full h-28 w-28" src="./guy.png" alt='Photo_Kamil'/>
                    </div>
                    <h5 className="my-1"><p className="font-semibold">telefon:</p>+48 33 8 611 760 </h5>
                    <h5 className="my-1"><p className="font-semibold">e-mail:</p>info@befama.com.pl</h5>
                </div>

                <div className=" m-5  justify-center text-center">
                    <h2 className=" text-xl font-semibold mb-10 ">Zaopatrzenie i logistyka</h2>
                    <div className="flex w-full justify-center">
                        <img className="rounded-full h-28 w-28" src="./guy.png" alt='Photo_Kamil'/>
                    </div>
                    <h5 className="my-1"><p className="font-semibold">e-mail:</p>zakupy@befama.com.pl</h5>
                </div>
               
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Department