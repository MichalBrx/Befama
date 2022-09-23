import React from 'react'

const Machnies = () => {

    const machines = [
        {"type":"Maszyny Rozluźniające","src":"./machines/Rozluzniajacy.jpg"}, 
        {"type":"Otwieraczki Bel","src":"./machines/Bel.jpg"}, 
        {"type":"Komory Mieszalnicze","src":"./machines/Mieszalnicza.jpg"}, 
        {"type":"Aparaty Nawilżające","src":"./machines/Natluszczarka.jpg"}, 
        {"type":"Transportery","src":"./machines/Transporter.jpg"}, 
        {"type":"Rozdzielacze, Filtry, Cyklony","src":"./machines/Worki.jpg"}, 
        {"type":"Zespoły Do Włóknin","src":"./machines/ZespDoWloknin.jpg"}, 
        {"type":"Zespoły Do Systemu Zgrzebnego TYP CR","src":"./machines/TypCR.jpg"}, 
        {"type":"Zespoły Do Sys. Półczesankowego i czesankowego Typ CS","src":"./machines/TypCS.jpg"}, 
        {"type":"Poziome Układacze Runa","src":"./machines/Runo.jpg"}, 
        {"type":"Maszyny Do Recyklingu","src":"./machines/Recykling.jpg"}, 
        {"type":"Maszyny Specjalnego Przeznaczenia","src":"./machines/Specjalne.jpg"},
        {"type":"Linie Produkcyjne","src":""}
    ]

    const lines = [
        {}
    ]

    return (
        <div className="h-auto w-full flex flex-wrap justify-center" id='Machines'>
            <h1 className="text-4xl  text-center font-semibold mb-5 border-t rounded-lg py-5 shadow-xl m-5 w-4/5 p-3">Maszyny które oferujemy</h1>
            <div className='flex justify-center flex-wrap gap-10 lg:gap-16 lg:gap-x-28 lg:w-4/5 max-w-6xl'>
                {machines.map((machine: any, index: React.Key) =>(
                    <div key={index} className="card card-compact w-72 bg-white border-t shadow-xl  p-2">
                        <figure><img src={machine.src} alt="Machine"  className="h-52 rounded-lg"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">{machine.type}</h2>

                            <div className="card-actions justify-end mt-auto">
                                <button className="btn">Dowiedz się więcej... </button>
                                {/* <a className="link link-hover text-lg">Dowiedz się więcej...</a> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Machnies