import React, { useState } from 'react'

import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';




const Machnies = () => {

    const { t } = useTranslation()


    const machines = [
        // !!!pozmieniac zdjęcia !!!
        {type: "Maszyny Rozluźniające", src: "./machines/rozluzniajacy.webp", tag: [
            {name: "AB6"}, 
            {name: "AB19"}, 
            {name: "AB19G"}
        ]}, 
        {type: "Otwieraczki Bel", src: "./machines/Bel.webp", tag: [
            {name: "OB1"}, 
            {name: "OB2"}
        ]}, 
        {type: "Komory Mieszalnicze", src: "./machines/Mieszalnicza.webp", tag: [
            {name: "KMC1500"}, 
            {name: "KMC3000"}, 
            {name: "MW6"}
        ]},
        {type: "Urządzenia do cięcia Wzdłużnego i Poprzecznego","src": "./machines/Specjalne.webp", tag: [
            {name:"Urządzenia do cięcia Wzdłużnego i Poprzecznego"}
        ]}, 

        {type: "Zgrzeblarki Laboratoryjne i Specjalnego Przeznaczenia",src: "./machines/ZespDoWloknin.webp", tag: [
            {name: "3KA"}, 
            {name: "3AGK"}
        ]},  
        {type: "Zgrzeblarki do produkcji przędzy systemu Zgrzebnego i Czesankowego",src: "./machines/ZespDoWloknin.webp", tag: [
            {name: "TYP CR"}, 
            {name: "TYP CS"}
        ]},
        {type: "Zgrzeblarki do Włóknin", src: "./machines/ZespDoWloknin.webp", tag: [
            {name: "CU611"}, 
            {name: "CU641"}, 
            {name: "CU661"}
        ]},
        {type: "Układacze poziome serii", src: "./machines/Runo.webp", tag: [
            {name: "5W50"}, 
            {name: "5WN700"}
        ]}, 
        {type: "Rozciągarki serii", src: "./machines/rozciagarki.webp", tag: [
            {name: "SERIA WD"}
        ]}, 
        {type: "Maszyny Do Recyklingu", src: "./machines/Recykling.webp", tag: [
            {name: "Szarparki Krajek AC4B"}, 
            {name: "Szarparka Odpadów AC5"},
            {name: "Agregaty Szarpiące AC40"},
            {name: "Krajarki Rotacyjne AC39"}
        ]}, 
        {type: "Kondensery Obrotowe, Cyklony, Filtry", src: "./machines/Worki.webp", tag: [
            {name:"Kondensery Obrotowe, Cyklony, Filtry"}
        ]}, 
        {type: "Instalacje Transportu Pneumatycznego", src: "./machines/Recykling.webp", tag: [
            {name:"Instalacje Transportu Pneumatycznego"}
        ]},
        {type: "Transportery Zbiorcze", src: "./machines/Transporter.webp", tag: [
            {name: "TYP TP"}, 
            {name:"TYP TPR"}
        ]}, 
 
        {type: "Urządzenia Zwijające", src: "./machines/Worki.webp", tag: [
            {name:"Urządzenia Zwijające"}
        ]}

    ]



    return (
        <div className="h-auto w-full flex flex-wrap justify-center" id='Machines'>
            
            <div className="w-full flex justify-center">
                <h1 className="md:text-5xl text-3xl text-center font-semibold border-b py-5 my-5 mb-10 rounded-lg w-3/5 sm:w-2/5"> {t('offer')} </h1>
            </div>

            <div className='flex justify-center flex-wrap gap-10 lg:gap-16 lg:gap-x-28 lg:w-4/5 max-w-6xl'>
                {machines.map((machine: any, index: React.Key) => (
                    <div key={index} className="card card-compact w-72 bg-white border-t shadow-xl p-3 overflow-visible" >
                        <figure><img src={machine.src} alt="Machine" className="h-auto w-full rounded-lg max-h-44 "/></figure>
                        <div className="card-body overflow-visible">
                            <h2 className="card-title">{machine.type}</h2>

                            <div className="dropdown justify-end mt-auto z-20">
                                <button className="btn"> {t('learn_more')} </button>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 border-t mt-2 ">
                                    {machine.tag?.map((machinery:any, index:React.Key) => ( 
                                        <li key={index}><Link to={{pathname:'/machine/' + machinery.name }} >{machinery.name}</Link></li>
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