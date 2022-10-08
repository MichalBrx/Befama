import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import Footer from '../content/Footer'
import SubNavbar from '../content/SubNavbar'
import ScrollToTop from '../functions/ScrollToTop'



const Machine = () => {

  const { t } = useTranslation()
  const {name} = useParams()




  const machines = [
    // !!!pozmieniac zdjęcia !!!

        {name: "AB6", img: ".././machines/AB6.webp", description: t("AB6"), type: "Maszyny rozluźniające"}, 
        {name: "AB19", img: "", description: t("AB19"), type: "Maszyny rozluźniające"}, 
        {name: "AB19G", img: "", description: t("AB19G"), type: "Maszyny rozluźniające"}, 

        {name: "OB1", img: ".././machines/OB1E.webp", description: t("OB1"), type: "Otwieraczki bel"}, 
        {name: "OB2", img: "", description: t("OB2"), type: "Otwieraczki bel"},

        {name: "KMC1500", img: "", description: t("KMC1500"), type: "Komory mieszalnicze"}, 
        {name: "KMC3000", img: "", description: t("KMC3000"), type: "Komory mieszalnicze"}, 
        {name: "MW6", img: "", description: t("MW6"), type: "Komory mieszalnicze"}, 

        {name: "TYP TP", img: "", description: t("TP"), type: "Transportery zbiorcze"}, 
        {name:"TYP TPR", img: "", description: t("TPR"), type: "Transportery zbiorcze"}, 


        {name: "3KA", img: "", description: t("3KA"), type: "Zgrzeblarki laboratoryjne i specjalnego przeznaczenia"}, 
        {name: "3AGK", img: "", description: t("3AGK"), type: "Zgrzeblarki laboratoryjne i specjalnego przeznaczenia"},  

        {name: "TYP CR", img: "", description: t("CR"), type: "Zgrzeblarki do produkcji przędzy systemu zgrzebnego i czesankowego"}, 
        {name: "TYP CS", img: "", description: t("CS"), type: "Zgrzeblarki do produkcji przędzy systemu zgrzebnego i czesankowego"},

        {name: "CU611", img: "", description: t("CU611"), type: "Zgrzeblarki do włóknin"}, 
        {name: "CU641", img: "", description: t("CU641"), type: "Zgrzeblarki do włóknin"}, 
        {name: "CU661", img: "", description: t("CU661"), type: "Zgrzeblarki do włóknin"},

        {name: "5W50", img: "", description: t("5W50"), type: "Układacze poziome serii"}, 
        {name: "5WN700", img: "", description: t("5WN700"), type: "Układacze poziome serii"}, 
        {name: "Seria WD", img: "", description: t("WD"), type: "Rozciągarki serii"}, 

        {name: "Szarparki krajek AC4B", img: "", description: t("AC4B"), type: "Maszyny do recyklingu"}, 
        {name: "Szarparka odpadów AC5", img: "", description: t("AC5"), type: "Maszyny do recyklingu"},
        {name: "Agregaty szarpiące AC40", img: "", description: t("AC40"), type: "Maszyny do recyklingu"},
        {name: "Krajarki rotacyjne AC39", img: "", description: t("AB39"), type: "Maszyny do recyklingu"}, 

        {name:"Kondensery obrotowe, cyklony, filtry", img: "", description: t("Filters"), type: "Kondensery obrotowe, cyklony, filtry"}, 

        {name:"Instalacje transportu pneumatycznego", img: "", description: t("Transport"), type: "Instalacje transportu pneumatycznego"},

        {name:"Urządzenia do cięcia wzdłużnego i poprzecznego", img: "", description: t("Cutter"), type: "Urządzenia do cięcia wzdłużnego i poprzecznego"},

        {name:"Urządzenia zwijające", img: "", description: t("Curling"), type: "Urządzenia zwijające"}

] 



 
  return (
    <div>
      <ScrollToTop />
      <SubNavbar />

      
      <div className="flex justify-center md:my-12">
        {machines.map((machine) => {
          if (machine.name === name) {
            return(
              <div key={machine.name} className="mt-24 flex justify-center flex-wrap max-w-xl">
              <h1 className="text-center font-impact text-3xl md:text-5xl w-full">{machine.name}</h1>
              <p className="text-lg text-gray-500 mt-2">{machine.type}</p>
    
              <div className="m-2 my-6 md:my-10 max-w-lg" >
                <img src={machine.img} alt="Clicked Machine" className="rounded-lg" />
              </div>
    
              <div className="text-xl text-cente mx-2 text-center md:mx-10 mb-10" >
                <p>{machine.description}</p>
              </div>
            </div>
           )} else {
             return null
          }
        })}

      </div>

      <Footer />

    </div>
  )
}

export default Machine