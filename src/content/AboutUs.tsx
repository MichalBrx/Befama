import React from 'react'

const AboutUs = () => {
  return (
    <div className="p-5 pt-8 " id='aboutus'>
        <div id='mobile' className="lg:hidden text-lg max-w-xs">
            <h1  className="text-4xl font-bold p-5 text-center">O nas</h1>
            <div className='py-2 flex flex-wrap'>
                <img className="rounded-lg h-44 w-full" src="../machines/OB1E.jpg" alt="Machine-OB1E"/>
                <p className='px-1'>BEFAMA jest rzetelnym producentem maszyn włókienniczych znanym w ponad 80 krajach świata, gdzie dostarczyła ogółem kilka tysięcy maszyn i urządzeń.</p>
            </div>
            <div className='py-2 flex flex-wrap '>
                <img className="rounded-lg h-44 w-full" src="../machines/ukladacz.jpg" alt="Machine-ukladacz" />
                <h2 className="font-semibold text-xl p-1 mt-3">Specjalizacje</h2>
                <p className='px-1'>
                    Obecnie firma specjalizuje się głównie w produkcji linii do obróbki wszelkiego typu włókien od naturalnej wełny po włókna syntetyczne. Szeroki asortyment maszyn pozwala na dostosowanie linii produkcyjnej
                    do indywidualnych potrzeb klienta. Procesy tworzenia konstrukcji i technologii realizowane są przez wysokiej klasy specjalistów, technologów i konstruktorów.
                </p>
            </div>
            <div className='py-2 flex flex-wrap '>
                <img className="rounded-lg h-44 w-full" src="../machines/AB6-2.jpg" alt="Machine-CU661" />
                <h2 className="font-semibold text-xl p-1 mt-3">Oferta</h2>
                <p className='px-1'>
                    W ofercie firmy można znaleźć szeroki asortyment maszyn, od linii rozluźniająco-mieszających, przez zespoły zgrzeblące różnych technologii, układacze, 
                    maszyny do odzyskiwania włókien z wyrobów włókienniczych i inne maszyny pomocnicze.
                </p>
            </div>
            <div className='py-2 flex flex-wrap '>
                <img className="rounded-lg h-44 w-full"  src="../machines/AB6.jpg"  alt="Machine-rozciagarka" />
                <h2 className="font-semibold text-xl p-1 mt-3">Pomoc</h2>
                <p className='px-1'>
                    Zawsze służymy naszą radą i doświadczeniem w doborze najlepszych dla Państwa rozwiązań.
                </p>
            </div>
            <div className='py-2 flex flex-wrap '>
                <img className="rounded-lg h-44 w-full" src="../machines/teeth.jpg"  alt="Machine-control" />
                <h2 className="font-semibold text-xl p-1 mt-3">Gwarancja</h2>
                <p className='px-1'>
                    Po zrealizowaniu inwestycji udzielamy gwarancji na nasze wyroby, zapewniamy możliwość diagnozowania awarii poprzez łącze internetowe i natychmiastowy serwis. Ponadto gwarantujemy dostawę oryginalnych części zamiennych przez cały czas pracy maszyny.
                </p>
            </div>
        </div>


        <div id='desktop' className="hidden lg:block ">

            <div className="mt-5 ">
                <div className="card card-side bg-base-100 shadow-xl flex border-t my-5 mr-96">
                    <figure><img className="rounded-lg m-2 ml-5 self-center h-64 w-96" src="../machines/OB1E.jpg" alt="Movie"/></figure>
                    <div className="card-body w-80 self-center">
                        <h2 className="card-title">O nas</h2>
                        <p className='h-auto'>
                            BEFAMA jest rzetelnym producentem maszyn włókienniczych znanym w ponad 80 krajach świata, gdzie dostarczyła ogółem kilka tysięcy maszyn i urządzeń.
                        </p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl flex border-t my-5 ml-96">
                    <div className="card-body w-80 self-center">
                        <h2 className="card-title">Specjalizacje</h2>
                        <p className='h-auto'>
                            Obecnie firma specjalizuje się głównie w produkcji linii do obróbki wszelkiego typu włókien od naturalnej wełny po włókna syntetyczne. Szeroki asortyment maszyn pozwala na dostosowanie linii produkcyjnej
                            do indywidualnych potrzeb klienta. Procesy tworzenia konstrukcji i technologii realizowane są przez wysokiej klasy specjalistów, technologów i konstruktorów.
                        </p>
                    </div>
                    <figure><img className="rounded-lg m-2 ml-5 self-center w-96" src="../machines/AB6.jpg" alt="Movie"/></figure>
                </div>
                <div className="card card-side bg-base-100 shadow-xl flex border-t my-5 mr-96 items-center">
                    <figure><img className="rounded-lg m-2 ml-5 self-center  w-96" src="../machines/teeth.jpg" alt="Movie"/></figure>
                    <div className="card-body w-80 self-center">
                        <h2 className="card-title">Oferta</h2>
                        <p className='h-auto'>
                            W ofercie firmy można znaleźć szeroki asortyment maszyn, od linii rozluźniająco-mieszających, przez zespoły zgrzeblące 
                            różnych technologii, układacze, maszyny do odzyskiwania włókien z wyrobów włókienniczych i inne maszyny pomocnicze.
                        </p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl flex border-t my-5 ml-96">
                    <div className="card-body w-80 self-center">
                        <h2 className="card-title">Pomoc</h2>
                        <p className='h-auto'>
                            Zawsze służymy naszą radą i doświadczeniem w doborze najlepszych dla Państwa rozwiązań.
                        </p>
                    </div>
                    <figure><img className="rounded-lg m-2 ml-5 self-center  w-96" src="../machines/ukladacz.jpg" alt="Movie"/></figure>
                </div>
                <div className="card card-side bg-base-100 shadow-xl flex border-t my-5 mr-96 items-center">
                    <figure><img className="rounded-lg m-2 ml-5 self-center w-96" src="../machines/AB6-2.jpg" alt="Movie"/></figure>
                    <div className="card-body w-80 self-center">
                        <h2 className="card-title">Gwarancja</h2>
                        <p className='h-auto'>
                            Po zrealizowaniu inwestycji udzielamy gwarancji na nasze wyroby, zapewniamy możliwość diagnozowania awarii poprzez łącze internetowe i natychmiastowy serwis. 
                            Ponadto gwarantujemy dostawę oryginalnych części zamiennych przez cały czas pracy maszyny.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs