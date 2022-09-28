import React from 'react'
import { useNavigate } from "react-router";
import { useTranslation } from 'react-i18next'


const WorkWithUs = () => {

    const navigate = useNavigate()
    const { t } = useTranslation()

  return (
    <div className="card w-full shadow-xl rounded-lg max-w-md border-t">
    <figure className="px-10 pt-10">
      <img src="career.png" alt="career" className="rounded-xl hover:scale-110 duration-200 " />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title"> {t('work_w_us')} </h2>
      <p> {t('if_you')} </p>
      <div className="card-actions">
        <button className="btn btn-primary" onClick={() => navigate("/Work")}> {t('who_we_need')} </button>
      </div>
    </div>
  </div>
  )
}

export default WorkWithUs