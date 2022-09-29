import React from 'react'
import { useNavigate } from "react-router";
import { MdBuild, MdControlCamera, MdOutlineDesignServices, MdOutlineMiscellaneousServices } from "react-icons/md"
import { GrMapLocation } from "react-icons/gr"
import { AiOutlineLineChart } from "react-icons/ai"
import { FaScrewdriver, FaTools, FaDropbox, } from "react-icons/fa"
import { useTranslation } from 'react-i18next';

const Services = () => {

  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div id='services' className="flex justify-center border mx-1 roudned-lg">
        <div className="p-5 ">
        <h1 className="text-4xl font-bold p-5 text-center mb-2"> {t("offer_title")} </h1>
        <div className="flex gap-2 flex-wrap text-center justify-center">
            <div className="flex justify-center p-3">
             <MdBuild className="w-8 h-8 self-center"/>
              <p className="w-4/5 text-left pl-5"> {t("offer1")} </p>
            </div>
            <div className="flex justify-center p-3">
             <FaScrewdriver className="w-8 h-8 self-center"/>
              <p className="w-4/5 text-left pl-5"> {t("offer2")} </p>
            </div>
            <div className="flex justify-center p-3">
             <FaTools className="w-8 h-8 self-center"/>
              <p className="w-4/5 text-left pl-5"> {t("offer3")} </p>
            </div>
            <div className="flex justify-center p-3">
             <MdControlCamera className="w-8 h-8 self-center"/>
              <p className="w-4/5 text-left pl-5"> {t("offer4")} </p>
            </div>
            <div className="flex justify-center p-3">
             <MdOutlineDesignServices className="w-8 h-8 self-center"/>
              <p className="w-4/5 text-left pl-5"> {t("offer5")} </p>
            </div>
            <div className="flex justify-center p-3">
             <FaDropbox className="w-8 h-8 self-center"/>
              <p className="w-4/5 text-left pl-5"> {t("offer6")} </p>
            </div>
            <div className="flex justify-center p-3">
             <GrMapLocation className="w-8 h-8 self-center"/>
              <p className="w-4/5 text-left pl-5"> {t("offer7")} </p>
            </div>
            <div className="flex sm:justify-center justify-start w-full sm:w-auto p-3 ">
             <AiOutlineLineChart className="w-8 h-8 self-center"/>
              <p className="w-4/5 text-left pl-5"> {t("offer8")} </p>
            </div>
            <div className="flex justify-center p-3">
             <MdOutlineMiscellaneousServices className="w-8 h-8 self-center"/>
              <p className="w-4/5 text-left pl-5"> {t("offer9")} </p>
            </div>
            <div className="w-full mt-5">
              <button className='btn btn-primary mt-3' onClick={() => navigate("/services")}> {t("learn_more")} </button>
            </div>

        </div>

      
      </div>

    </div>
  )
}

export default Services