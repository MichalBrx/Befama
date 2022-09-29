import React, { useCallback } from 'react'

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const Machnies = () => {

    const navigate = useNavigate()
    const { t } = useTranslation()

    const machines = [
        // !!!pozmieniac zdjęcia !!!
        {type: "Maszyny Rozluźniające", src: "./machines/Rozluzniajacy.jpg", tag: [
            {name: "AB6"}, 
            {name: "AB19"}, 
            {name: "AB19G"}
        ]}, 
        {type: "Otwieraczki Bel", src: "./machines/Bel.jpg", tag: [
            {name: "OB1"}, 
            {name: "OB2"}
        ]}, 
        {type: "Komory Mieszalnicze", src: "./machines/Mieszalnicza.jpg", tag: [
            {name: "KMC1500"}, 
            {name: "KMC3000"}, 
            {name: "MW6"}
        ]}, 
        {type: "Transportery Zbiorcze", src: "./machines/Transporter.jpg", tag: [
            {name: "TYP TP"}, 
            {name:"TYP TPR"}
        ]}, 

        {type: "Zgrzeblarki Laboratoryjne i Specjalnego Przeznaczenia",src: "./machines/ZespDoWloknin.jpg", tag: [
            {name: "3KA"}, 
            {name: "3AGK"}
        ]},  
        {type: "Zgrzeblarki do produkcji przędzy systemu Zgrzebnego i Czesankowego",src: "./machines/ZespDoWloknin.jpg", tag: [
            {name: "TYP CR"}, 
            {name: "TYP CS"}
        ]},
        {type: "Zgrzeblarki do Włóknin", src: "./machines/ZespDoWloknin.jpg", tag: [
            {name: "CU611"}, 
            {name: "CU641"}, 
            {name: "CU661"}
        ]},
        {type: "Układacze poziome serii", src: "./machines/Runo.jpg", tag: [
            {name: "5W50"}, 
            {name: "5WN700"}
        ]}, 
        {type: "Rozciągarki serii", src: "./machines/Natluszczarka.jpg", tag: [
            {name: "SERIA WD"}
        ]}, 
        {type: "Maszyny do Recyklingu", src: "./machines/recykling.jpg", tag: [
            {name: "Szarparki Krajek AC4B"}, 
            {name: "Szarparka Odpadów AC5"},
            {name: "Agregaty Szarpiące AC40"},
            {name: "Krajarki Rotacyjne AC39"}
        ]}, 
        {type: "Kondensery Obrotowe, Cyklony, Filtry ", src: "./machines/Worki.jpg", tag: [{name:""}]}, 
        {type: "Instalacje Transportu Pneumatycznego", src: "./machines/Recykling.jpg", tag: [{name:""}]}, 
        {type: "Urządzenia do cięcia Wzdłużnego i Poprzecznego","src": "./machines/Specjalne.jpg", tag: [{name:""}]},
        {type: "Urządzenia Zwijające", src: "./machines/Worki.jpg", tag: [{name:""}]}, 
        {type: "Linie Produkcyjne", src: "", tag: [{name:""}]}
    ]



    const lines = [
        {}
    ]

// ZROBIC ZAMYKANIE LISTY PO UZYCIU SCROLLA
    return (
        <div className="h-auto w-full flex flex-wrap justify-center" id='Machines'>
            <h1 className="md:text-5xl text-3xl text-center font-semibold mb-5 border-t rounded-lg py-5 shadow-xl m-5 w-4/5 p-3"> {t('offer')} </h1>
            <div className='flex justify-center flex-wrap gap-10 lg:gap-16 lg:gap-x-28 lg:w-4/5 max-w-6xl'>
                {machines.map((machine: any, index: React.Key) => (
                    <div key={index} className="card card-compact w-72 bg-white border-t shadow-xl p-2 overflow-visible" >
                        <figure><img src={machine.src} alt="Machine" className="h-52 rounded-lg"/></figure>
                        <div className="card-body overflow-visible">
                            <h2 className="card-title">{machine.type}</h2>


                            <div className="dropdown justify-end mt-auto">
                                <button className="btn"> {t('learn_more')} </button>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 border-t mt-2 ">
                                    {machine.tag?.map((machinery:any, index:React.Key) => (
                                        <li key={index}><a onClick={() => navigate("/"+ machinery.name)}>{machinery.name}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Machnies