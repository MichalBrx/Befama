import React,{useState} from 'react'
import { useTranslation } from 'react-i18next';

const ContactForm = () => {

  const { t } = useTranslation()
  const [state, setState] = useState()

  function handleChange(e:any){
    setState(e.target.value)
  }

  return (
    <div id='contact' className="max-w-sm">
      <h1 className='w-full text-center text-2xl font-semibold py-3'> {t('questions')} </h1>
      <h2 className='w-full text-center text-lg font-medium'> {t('write_us')} </h2>
      <form action="https://formsubmit.co/michalhaj2003@gmail.com" method='POST' className="p-3 flex flex-wrap justify-end">
          <input className="input input-bordered input-primary w-full max-w-xs my-1" type="text" name="name" required placeholder={t('names')} />
          <input className="input input-bordered input-primary w-full max-w-xs my-1" type="email" name="email" required placeholder={t('e-mail')} onChange={(e) => handleChange(e)}/>
          <textarea className='textarea textarea-primary w-full max-w-xs max-h-40 my-3' name="message" placeholder={t('question_content')} ></textarea>
          <button type="submit" className='btn btn-primary my-2 disabled:btn-disabled' disabled={!state}> {t('send')} </button>
      </form>
    </div>
  )
}

export default ContactForm