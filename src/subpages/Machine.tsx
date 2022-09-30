import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../content/Footer'
import SubNavbar from '../content/SubNavbar'

interface machinery {
  name: string,
  img: string,
  description:string
}

const Machine = ({machinery}: any) => {

  
  const {name} = useParams()
  console.log(name)
  console.log(useParams())
  return (
    <div>

      <SubNavbar />



      
      <div className="flex justify-center md:my-12">
        <div className="mt-32 flex justify-center flex-wrap max-w-xl">
          <h1 className="text-center font-impact text-3xl md:text-5xl w-full">{name}</h1>
          <h3 className="text-lg text-gray-500 mt-2">Zgrzeblarki jakies tam na pewno</h3>

          <div className="m-2 my-6 md:my-10 max-w-lg" >
            <img src={name} alt="Clicked Machine" className="rounded-lg" />
          </div>

          <div className="text-xl text-cente mx-2 text-center md:mx-10 mb-10" >
            <p>{name}</p>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Machine