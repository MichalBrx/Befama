import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {

    const { t } = useTranslation()

  return (
    <div className="p-5 pt-8 " id='aboutus'>
        <div id='mobile' className="md:hidden text-lg max-w-xs">
            <h1  className="text-4xl font-semibold p-5 text-center"> {t('about_us')} </h1>
            <div className='py-2 flex flex-wrap'>
                <img className="rounded-lg h-44 w-full" src="../types/OB1E.webp" alt="Machine-OB1E"/>
                <p className='px-1'> 
                    {t('fact1')} 
                </p>
            </div>
            <div className='py-2 flex flex-wrap '>
                <img className="rounded-lg h-44 w-full" src="../types/AB6.webp" alt="Machine-ukladacz" />
                <h2 className="font-semibold text-xl p-1 mt-3"> {t('specialization')} </h2>
                <p className='px-1'>
                    {t('fact2')}
                </p>
            </div>
            <div className='py-2 flex flex-wrap '>
                <img className="rounded-lg h-44 w-full" src="../types/teeth.webp " alt="Machine-CU661" />
                <h2 className="font-semibold text-xl p-1 mt-3"> {t('offer_head')} </h2>
                <p className='px-1'>
                    {t('fact3')}
                </p>
            </div>
            <div className='py-2 flex flex-wrap '>
                <img className="rounded-lg h-44 w-full"  src="../types/zgrzeblarki_tlo.webp"  alt="Machine-rozciagarka" />
                <h2 className="font-semibold text-xl p-1 mt-3"> {t('help')} </h2>
                <p className='px-1'>
                    {t('fact4')}
                </p>
            </div>
            <div className='py-2 flex flex-wrap '>
                <img className="rounded-lg h-44 w-full" src="../machines/AB6-2.webp"  alt="Machine-control" />
                <h2 className="font-semibold text-xl p-1 mt-3"> {t('guarantee')} </h2>
                <p className='px-1'>
                    {t('fact5')}
                </p>
            </div>
        </div>


        <div id='desktop' className="hidden md:block ">

            <div className="mt-5 ">
                <div className="card card-side bg-white shadow-xl flex border-t my-5 lg:mr-96 py-3 hover:scale-110 duration-200">
                    <figure><img className="rounded-lg m-2 ml-5 self-center h-64 w-96" src="../types/OB1E.webp" alt="OB1E"/></figure>
                    <div className="card-body w-80 self-center">
                        <h2 className="card-title"> {t('about_us')}  </h2>
                        <p className='h-auto'>
                            {t('fact1')}
                        </p>
                    </div>
                </div>
                <div className="card card-side bg-white shadow-xl flex border-t my-5 lg:ml-96 pr-5 hover:scale-110 duration-200">
                    <div className="card-body w-80 self-center">
                        <h2 className="card-title"> {t('specialization')} </h2>
                        <p className='h-auto'>
                            {t('fact2')}
                        </p>
                    </div>
                    <figure><img className="rounded-lg   self-center h-auto w-96" src="../types/AB6.webp" alt="AB6"/></figure>
                </div>
                <div className="card card-side bg-white shadow-xl flex border-t my-5 lg:mr-96 items-center hover:scale-110 duration-200">
                    <figure><img className="rounded-lg m-2 ml-5 self-center h-64 w-96" src="../types/teeth.webp" alt="Teeth Machine"/></figure>
                    <div className="card-body w-80 self-center">
                        <h2 className="card-title"> {t('offer_head')} </h2>
                        <p className='h-auto'>
                            {t('fact3')}
                        </p>
                    </div>
                </div>
                <div className="card card-side bg-white shadow-xl p-3 flex border-t my-5 lg:ml-96 hover:scale-110 duration-200">
                    <div className="card-body w-80 self-center">
                        <h2 className="card-title"> {t('help')} </h2>
                        <p className='h-auto'>
                            {t('fact4')}
                        </p>
                    </div>
                    <figure><img className="rounded-lg m-2 ml-5 self-center h-64 w-96" src="../types/zgrzeblarki_tlo.webp" alt="Machine"/></figure>
                </div>
                <div className="card card-side bg-white shadow-xl flex border-t my-5 lg:mr-96 items-center py-2 hover:scale-110 duration-200">
                    <figure><img className="rounded-lg m-2 ml-5 self-center h-auto w-96" src="../machines/AB6-2.webp" alt="AB-6"/></figure>
                    <div className="card-body w-80 self-center">
                        <h2 className="card-title"> {t('guarantee')} </h2>
                        <p className='h-auto'>
                            {t('fact5')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs