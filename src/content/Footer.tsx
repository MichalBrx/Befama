import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-auto bg-black flex-wrap flex gap-8 justify-center py-5 text-white">
        <div id='COMPANY' className="p-3 ">
            <p className="text-center text-4xl font-impact">BEFAMA Sp. z o.o.</p>
            <p className="text-center text-lg"> Serce Technologi</p>
        </div>
        <div id='ADRESS' className="p-2 ">
            <h1 className="text-center text-2xl font-semibold">ADRES</h1>
            <ul className="text-teal-300 text-center text-base">
                <li className='my-2'>ul. Północna 212 <br/> 43-376 Kalna</li>
                <li className='my-2'>ul. J.Grabowskiego 4/4 <br/> 43-300 Bielsko-Biała</li>
            </ul>
            
        </div>
        <div id='CONTACT' className="p-2">
            <h1 className="text-center text-2xl font-semibold">KONTAKT</h1>
            <ul className="text-teal-300 text-center text-base">
              <li className='my-2'>tel.: +48 33 8 611 760 <br/>e-mail: info@befama.com.pl</li>  
              <li className='my-2 underline md:no-underline'><a className="link link-hover">Dział Sprzedaży</a></li>
              <li className='my-2 underline md:no-underline'><a className="link link-hover">Dział Konstrukcyjny </a></li>
              <li className='my-2 underline md:no-underline'><a className="link link-hover">Automatyka - Serwis </a></li>
              <li className='my-2 underline md:no-underline'><a className="link link-hover">Zaopatrzenie - Logistyka </a></li>
            </ul>
        </div>

        {/* MA BYC POKAZANE TYKLO NA WIEKSZYM EKRANIE */}
        <div id="COOP" className="p-2 hidden">
          <h1 className="text-center font-semibold">Nasze maszyny są skonstrułowane z <br/>części od renomowanych producentów</h1>
        </div>

        <div id='COPMANY NIP' className='p-2 max-w-xs'>      
          <p className="text-center">
            Sąd Rejonowy w Bielsku-Białej VIII Wydział Gospodarczy Krajowego Rejestru Sądowego 
            <br/>Nr KRS 0000370537
            <br/>NIP 9372637773
            <br/>REGON 241784213
          </p>
        </div>

        <div id='WEB_AUTHOR' className="w-full text-center  text-gray-700">
        <hr className="border-1 border-white"/>
        <h1 className="p-2 mt-2"> Website created by Michal Haj </h1>
        <p className="font-semibold">Contact: </p>
        <ul>
          <li>tel.: 48 537 886 057</li>
          <li>e-mail: michalhaj2003@gmail.com</li>
        </ul>
        </div>
    </div>
  )
}

export default Footer