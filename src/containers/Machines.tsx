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
        {"type":"Maszyny Specjalnego Przeznaczenia","src":"./machines/Specjalne.jpg"}
    ]

    return (
        <div className="h-auto w-full flex justify-center flex-wrap gap-5">
            
            {machines.map((machine: any, index: React.Key) =>(
                <div key={index} className="card card-compact w-72 bg-base-100 shadow-xl my-10 ">
                    <figure><img src={machine.src} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{machine.type}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}




        

    </div>
    )
}

export default Machnies