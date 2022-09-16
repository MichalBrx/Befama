import React from 'react'
import Machnies from './Machines'
import Footer from './Footer'
import Services from './Services'
import AboutUs from './AboutUs'


const Background = () => {

    
  return (
    <div className=" bg-black">
      <div className="flex justify-center">
            <span className="z-10 absolute  mt-20 p-5 ">
              <p className="text-4xl text-white text-center font-bold flex justify-center">Witaj w Befamie</p>
              <p className="text-base text-white text-center font-bold flex mt-2 justify-center ">Oferujemy nowe uslugi i czesci do naszych maszyn</p>
            </span>
        </div>
        <section className="absolute bg-black "  id='bg-img'>
          <img src='./main2.jpg' alt='Machine' className="saturate-50 h-screen object-cover w-screen  opacity-70" id='main_img'></img>


          <div className="bg-white py-10">

            <Machnies />

          </div>

          <div className="bg-white border-none">

            <Services />

          </div>

          <div className="bg-white border-none flex justify-center w-full">
            <AboutUs/>
          </div>
          
          <div className="bg-white py-14 flex justify-center">
            <div className="card w-full shadow-xl rounded-lg max-w-md border-t">
              <figure className="px-10 pt-10">
                <img src="career.png" alt="career" className="rounded-xl hover:scale-110 duration-200 " />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Pracuj z Nami</h2>
                <p>Jeżeli chcesz poszeżać swoją wiedzę i dalej się rozwijać wyślij do nas swoje CV!</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Wyślij...</button>
                </div>
              </div>
            </div>
          </div>



          <Footer />

      </section>
    </div>
  )
}

export default Background