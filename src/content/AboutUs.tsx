import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {

    const { t } = useTranslation()

  return (
    <div className="p-5 pt-8 " id='aboutus'>
        <div id='mobile' className="md:hidden text-lg max-w-xs">
            <h1  className="text-4xl font-semibold p-5 text-center"> {t('about_us')} </h1>
            <div className='py-2 flex flex-wrap'>
                <img className="rounded-lg h-44 w-full" src="../machines/OB1E.jpg" alt="Machine-OB1E"/>
                <p className='px-1'> 
                    {t('fact1')} 
                </p>
            </div>
            <div className='py-2 flex flex-wrap '>
                <img className="rounded-lg h-44 w-full" src="../machines/ukladacz.jpg" alt="Machine-ukladacz" />
                <h2 className="font-semibold text-xl p-1 mt-3"> {t('specialization')} </h2>
                <p className='px-1'>
                    {t('fact2')}
                </p>
            </div>
            <div className='py-2 flex flex-wrap '>
                <img className="rounded-lg h-44 w-full" src="../machines/AB6-2.jpg" alt="Machine-CU661" />
                <h2 className="font-semibold text-xl p-1 mt-3"> {t('offer_head')} </h2>
                <p className='px-1'>
                    {t('fact3')}
                </p>
            </div>
            <div className='py-2 flex flex-wrap '>
                <img className="rounded-lg h-44 w-full"  src="../machines/AB6.jpg"  alt="Machine-rozciagarka" />
                <h2 className="font-semibold text-xl p-1 mt-3"> {t('help')} </h2>
                <p className='px-1'>
                    {t('fact4')}
                </p>
            </div>
            <div className='py-2 flex flex-wrap '>
                <img className="rounded-lg h-44 w-full" src="../machines/teeth.jpg"  alt="Machine-control" />
                <h2 className="font-semibold text-xl p-1 mt-3"> {t('guarantee')} </h2>
                <p className='px-1'>
                    {t('fact5')}
                </p>
            </div>
        </div>


        <div id='desktop' className="hidden md:block ">

            <div className="mt-5 ">
                <div className="card card-side bg-base-100 shadow-xl flex border-t my-5 lg:mr-96">
                    <figure><img className="rounded-lg m-2 ml-5 self-center h-64 w-96" src="../machines/OB1E.jpg" alt="Movie"/></figure>
                    <div className="card-body w-80 self-center">
                        <h2 className="card-title"> {t('about_us')}  </h2>
                        <p className='h-auto'>
                            {t('fact1')}
                        </p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl flex border-t my-5 lg:ml-96">
                    <div className="card-body w-80 self-center">
                        <h2 className="card-title"> {t('specialization')} </h2>
                        <p className='h-auto'>
                            {t('fact2')}
                        </p>
                    </div>
                    <figure><img className="rounded-lg m-2 ml-5 self-center w-96" src="../machines/AB6.jpg" alt="Movie"/></figure>
                </div>
                <div className="card card-side bg-base-100 shadow-xl flex border-t my-5 lg:mr-96 items-center">
                    <figure><img className="rounded-lg m-2 ml-5 self-center  w-96" src="../machines/teeth.jpg" alt="Movie"/></figure>
                    <div className="card-body w-80 self-center">
                        <h2 className="card-title"> {t('offer_head')} </h2>
                        <p className='h-auto'>
                            {t('fact3')}
                        </p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl flex border-t my-5 lg:ml-96">
                    <div className="card-body w-80 self-center">
                        <h2 className="card-title"> {t('help')} </h2>
                        <p className='h-auto'>
                            {t('fact4')}
                        </p>
                    </div>
                    <figure><img className="rounded-lg m-2 ml-5 self-center  w-96" src="../machines/ukladacz.jpg" alt="Movie"/></figure>
                </div>
                <div className="card card-side bg-base-100 shadow-xl flex border-t my-5 lg:mr-96 items-center">
                    <figure><img className="rounded-lg m-2 ml-5 self-center w-96" src="../machines/AB6-2.jpg" alt="Movie"/></figure>
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