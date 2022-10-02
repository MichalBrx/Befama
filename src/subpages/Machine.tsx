import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../content/Footer'
import SubNavbar from '../content/SubNavbar'



const Machine = () => {

  
  const {name} = useParams()




  const machines = [
    // !!!pozmieniac zdjęcia !!!

        {name: "AB6", img: ".././machines/AB6.jpg", description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nemo similique cumque, in quas modi facere expedita, voluptatibus labore sit nihil maxime doloremque obcaecati provident molestias iure dolor sed totam?", type: "Maszyny Rozluźniające"}, 
        {name: "AB19", img: "", description:""}, 
        {name: "AB19G", img: "", description:""}, 

        {name: "OB1", img: "", description:""}, 
        {name: "OB2", img: "", description:""},

        {name: "KMC1500", img: "", description:""}, 
        {name: "KMC3000", img: "", description:""}, 
        {name: "MW6", img: "", description:""}, 

        {name: "TYP TP", img: "", description:""}, 
        {name:"TYP TPR", img: "", description:""}, 


        {name: "3KA", img: "", description:""}, 
        {name: "3AGK", img: "", description:""},  

        {name: "TYP CR", img: "", description:""}, 
        {name: "TYP CS", img: "", description:""},

        {name: "CU611", img: "", description:""}, 
        {name: "CU641", img: "", description:""}, 
        {name: "CU661", img: "", description:""},
        {name: "5W50", img: "", description:""}, 
        {name: "5WN700", img: "", description:""}, 
        {name: "SERIA WD", img: "", description:""}, 

        {name: "Szarparki Krajek AC4B", img: "", description:""}, 
        {name: "Szarparka Odpadów AC5", img: "", description:""},
        {name: "Agregaty Szarpiące AC40", img: "", description:""},
        {name: "Krajarki Rotacyjne AC39", img: "", description:""}, 


        {name:"Kondensery Obrotowe, Cyklony, Filtry", img: "", description:""}, 

        {name:"Instalacje Transportu Pneumatycznego", img: "", description:""},


        {name:"Urządzenia do cięcia Wzdłużnego i Poprzecznego", img: "", description:""},

        {name:"Urządzenia Zwijające", img: "", description:""}

] 



 
  return (
    <div>

      <SubNavbar />

      
      <div className="flex justify-center md:my-12">
        {machines.map((machine) => {
          if (machine.name === name) {
            return(
              <div key={machine.name} className="mt-32 flex justify-center flex-wrap max-w-xl">
              <h1 className="text-center font-impact text-3xl md:text-5xl w-full">{machine.name}</h1>
              <h3 className="text-lg text-gray-500 mt-2">{machine.type}</h3>
    
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