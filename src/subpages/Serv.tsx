import React from 'react'

import Footer from '../content/Footer'
import Navbar from '../content/Navbar'

const Serv = () => {
  return (
    <div>
        <div className="h-16">
            <Navbar/>
        </div>
        <div className='flex justify-center m-1'>
            <div className="flex flex-wrap max-w-lg justify-center my-8">
                <h3 className="text-3xl font-semibold text-center">Oferujemy także szereg innych usług oraz części zamiennych takich jak:</h3>
                <div className="">
                    <div className='p-2 flex flex-wrap justify-center shadow-lg border-t rounded-lg mt-5 text-center'>
                        <img className="rounded-lg w-40"  src="./walek.jpg"  alt="Roller" />
                        <h2 className="font-semibold text-xl p-1 mt-3 items-center max-w-xs">Wałki i inne elementy toczone</h2>
                    </div>
                    <div className='p-2 flex flex-wrap justify-center shadow-lg border-t rounded-lg mt-5 text-center'>
                        <img className="rounded-lg w-40"  src="./tasma.jpg"  alt="Roller" />
                        <h2 className="font-semibold text-xl p-1 mt-3 items-center max-w-xs">Dostawa i nawijanie obić piłowych oraz elastycznych</h2>
                    </div>
                    <div className='p-2 flex flex-wrap justify-center shadow-lg border-t rounded-lg mt-5 text-center'>
                        <img className="rounded-lg w-40"  src="./szarpak.jpg"  alt="Szarpak" />
                        <h2 className="font-semibold text-xl p-1 mt-3 items-center max-w-xs">Dostawa i montaż płyt szarpakowych, szczeblaków</h2>
                    </div>
                    <div className='p-2 flex flex-wrap justify-center shadow-lg border-t rounded-lg mt-5 text-center'>
                        <img className="rounded-lg w-40"  src="./lejki.jpg"  alt="Roller" />
                        <h2 className="font-semibold text-xl p-1 mt-3 items-center max-w-xs">Elementy z tworzyw sztucznych do maszyn</h2>
                    </div>
                    <div className='p-2 flex flex-wrap justify-center shadow-lg border-t rounded-lg mt-5 text-center'>
                        <img className="rounded-lg w-40"  src="./szczelinomierze.jpg"  alt="Szczelinomierz" />
                        <h2 className="font-semibold text-xl p-1 mt-3 items-center max-w-xs">Szczelinomierze do ustawiania maszyn</h2>
                    </div>
                    <div className='p-2 flex flex-wrap justify-center shadow-lg border-t rounded-lg mt-5 text-center'>
                        <img className="rounded-lg w-40 rotate-90"  src="./oprawy.jpg"  alt="Roller" />
                        <h2 className="font-semibold text-xl p-1 mt-3 items-center max-w-xs">Części odlewane, kute, walcowane</h2>
                    </div>
                    <div className='p-2 flex flex-wrap justify-center shadow-lg border-t rounded-lg mt-5 text-center'>
                        <img className="rounded-lg w-40"  src="./wilk.jpg"  alt="Roller" />
                        <h2 className="font-semibold text-xl p-1 mt-3 items-center max-w-xs">Elementy sterowania, modernizacja</h2>
                    </div>

                </div>
               
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Serv