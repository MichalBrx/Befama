import React,{useState} from 'react'

const ContactForm = () => {

  const [state, setState] = useState()

  function handleChange(e:any){
    setState(e.target.value)
  }

  return (
    <div id='contact' className="max-w-sm">
      <h1 className='w-full text-center text-2xl font-semibold py-3'>Masz jakieś pytanie?</h1>
      <h2 className='w-full text-center text-lg font-medium'>Napisz do NAS!</h2>
      <form action="https://formsubmit.co/michalhaj2003@gmail.com" method='POST' className="p-3 flex flex-wrap justify-end">
          <input className="input input-bordered input-primary w-full max-w-xs my-1" type="text" name="name" required placeholder='Imię i Nazwisko' />
          <input className="input input-bordered input-primary w-full max-w-xs my-1" type="email" name="email" required placeholder='Twój E-mail' onChange={(e) => handleChange(e)}/>
          <textarea className='textarea textarea-primary w-full max-w-xs my-3' name="message" placeholder="Treść zapytania" ></textarea>
          <button type="submit" className='btn btn-primary my-2 disabled:btn-disabled' disabled={!state}>Wyślij</button>
      </form>
    </div>
  )
}

export default ContactForm