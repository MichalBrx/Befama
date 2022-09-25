import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Work from './subpages/Work'
import Serv from './subpages/Serv'
import Department from './subpages/Department'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<BrowserRouter>
  

    <Routes >
      <Route path='/' element={<App />} />
      <Route path="Work" element={<Work />} />
      <Route path="Services" element={<Serv />} />
      <Route path="Department" element={<Department />} />
    </Routes>

</BrowserRouter>
)
