import React from 'react'
import { useNavigate } from "react-router";
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t } = useTranslation()
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto bg-black flex-wrap flex gap-8 justify-center py-5 text-white">
        <div id='COMPANY' className="p-3 ">
            <p className="text-center text-4xl font-impact">BEFAMA Sp. z o.o.</p>
            <p className="text-center text-lg"> {t('slogan')} </p>
        </div>
        <div id='ADRESS' className="p-2 ">
            <h1 className="text-center text-2xl font-semibold"> {t('adress')} </h1>
            <ul className="text-teal-300 text-center text-base">
                <li className='my-2'>{t("street")} Północna 212 <br/> 43-376 Kalna</li>
                <li className='my-2'>{t("street")} J.Grabowskiego 4/4 <br/> 43-300 Bielsko-Biała</li>
            </ul>
            
        </div>
        <div id='CONTACT' className="p-2">
            <h1 className="text-center text-2xl font-semibold"> {t('CONTACT')} </h1>
            <ul className="text-teal-300 text-center text-base">
              <li className='my-2'>{t("phone")} +48 33 8 611 760 <br/>e-mail: info@befama.com.pl</li>  
              <li className='my-2 underline md:no-underline'><a onClick={() => navigate("/Department")} className="link link-hover"> {t('dep1')} </a></li>
              <li className='my-2 underline md:no-underline'><a onClick={() => navigate("/Department")} className="link link-hover"> {t('dep2')} </a></li>
              <li className='my-2 underline md:no-underline'><a onClick={() => navigate("/Department")} className="link link-hover"> {t('dep3')} </a></li>
              <li className='my-2 underline md:no-underline'><a onClick={() => navigate("/Department")} className="link link-hover"> {t('dep4')} </a></li>
            </ul>
        </div>

        <div id='COPMANY NIP' className='p-2 max-w-xs'>      
          <p className="text-center">
            {t("law")}
            <br/>Nr KRS 0000370537
            <br/>NIP 9372637773
            <br/>REGON 241784213
          </p>
        </div>

        <div id='WEB_AUTHOR' className="w-full text-center  text-gray-700">
        <hr className="border-1 border-white"/>
        <h1 className="p-2 mt-2"> Website created by Michal Haj </h1>
        <p className="font-semibold">Contact: </p>
        <ul>
          <li>tel.: 48 537 886 057</li>
          <li>e-mail: michalhaj2003@gmail.com</li>
        </ul>
        </div>
    </div>
  )
}

export default Footer