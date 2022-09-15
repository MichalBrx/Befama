import { useState } from 'react'
import "./index.css"
import {MenuOutlined} from '@ant-design/icons'

import Navbar from './containers/Navbar'
import Background from './containers/Background'
import Machines from './containers/Machines'
import Features from './containers/Features'
import ContactForm from './containers/ContactForm'
import Footer from './containers/Footer'

function App() {






  return (
    <div className="bg-white">


      <Navbar />
      <Background />

      <ContactForm />
      
    </div>
  )
}

export default App
