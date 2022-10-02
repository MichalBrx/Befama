import React, { useState } from 'react'

import { useTranslation } from 'react-i18next';

import { Link, NavLink, Route, Router } from 'react-router-dom';

import Machine from '../subpages/Machine';








const Machnies = () => {

    const { t } = useTranslation()




    const machines = [
        // !!!pozmieniac zdjęcia !!!
        {type: "Maszyny Rozluźniające", src: "./machines/Rozluzniajacy.jpg", tag: [
            {name: "AB6", img: ".././AB6.jpg", description:"a taka fajna maszynka tego"}, 
            {name: "AB19", img: "", description:""}, 
            {name: "AB19G", img: "", description:""}
        ]}, 
        {type: "Otwieraczki Bel", src: "./machines/Bel.jpg", tag: [
            {name: "OB1", img: "", description:""}, 
            {name: "OB2", img: "", description:""}
        ]}, 
        {type: "Komory Mieszalnicze", src: "./machines/Mieszalnicza.jpg", tag: [
            {name: "KMC1500", img: "", description:""}, 
            {name: "KMC3000", img: "", description:""}, 
            {name: "MW6", img: "", description:""}
        ]}, 
        {type: "Transportery Zbiorcze", src: "./machines/Transporter.jpg", tag: [
            {name: "TYP TP", img: "", description:""}, 
            {name:"TYP TPR", img: "", description:""}
        ]}, 

        {type: "Zgrzeblarki Laboratoryjne i Specjalnego Przeznaczenia",src: "./machines/ZespDoWloknin.jpg", tag: [
            {name: "3KA", img: "", description:""}, 
            {name: "3AGK", img: "", description:""}
        ]},  
        {type: "Zgrzeblarki do produkcji przędzy systemu Zgrzebnego i Czesankowego",src: "./machines/ZespDoWloknin.jpg", tag: [
            {name: "TYP CR", img: "", description:""}, 
            {name: "TYP CS", img: "", description:""}
        ]},
        {type: "Zgrzeblarki do Włóknin", src: "./machines/ZespDoWloknin.jpg", tag: [
            {name: "CU611", img: "", description:""}, 
            {name: "CU641", img: "", description:""}, 
            {name: "CU661", img: "", description:""}
        ]},
        {type: "Układacze poziome serii", src: "./machines/Runo.jpg", tag: [
            {name: "5W50", img: "", description:""}, 
            {name: "5WN700", img: "", description:""}
        ]}, 
        {type: "Rozciągarki serii", src: "./machines/Natluszczarka.jpg", tag: [
            {name: "SERIA WD", img: "", description:""}
        ]}, 
        {type: "Maszyny do Recyklingu", src: "./machines/recykling.jpg", tag: [
            {name: "Szarparki Krajek AC4B", img: "", description:""}, 
            {name: "Szarparka Odpadów AC5", img: "", description:""},
            {name: "Agregaty Szarpiące AC40", img: "", description:""},
            {name: "Krajarki Rotacyjne AC39", img: "", description:""}
        ]}, 
        {type: "Kondensery Obrotowe, Cyklony, Filtry", src: "./machines/Worki.jpg", tag: [
            {name:"Kondensery Obrotowe, Cyklony, Filtry", img: "", description:""}
        ]}, 
        {type: "Instalacje Transportu Pneumatycznego", src: "./machines/Recykling.jpg", tag: [
            {name:"Instalacje Transportu Pneumatycznego", img: "", description:""}
        ]}, 
        {type: "Urządzenia do cięcia Wzdłużnego i Poprzecznego","src": "./machines/Specjalne.jpg", tag: [
            {name:"Urządzenia do cięcia Wzdłużnego i Poprzecznego", img: "", description:""}
        ]},
        {type: "Urządzenia Zwijające", src: "./machines/Worki.jpg", tag: [
            {name:"Urządzenia Zwijające", img: "", description:""}
        ]}

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
                                        <li key={index}><Link to={{pathname:'/machine/' + machinery.name }}  >{machinery.name}</Link></li>
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