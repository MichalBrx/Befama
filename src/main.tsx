import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Work from './subpages/Work';

import Department from './subpages/Department';
import Machine from './subpages/Machine';
import Serv from './subpages/Serv';


import App from './App'
import './index.css'
import './i18n'
import { Suspense } from 'react';

const loadingMarkup = (
  <div className="py-4 text-center grid place-content-center ">
    <h1 className="text-5xl font-bold my-40">Befama</h1>
    <div className="flex justify-center ">
      <h3 className='z-20 font-medium w-full text-3xl '>Loading..</h3>

      <svg 
        className='animate-spin'
        fill="none" 
        height="48" 
        viewBox="0 0 48 48" 
        width="48" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
      </svg>
    </div>
  </div>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Suspense fallback={loadingMarkup}>
      <Routes >
        <Route path='/' element={<App />} />
        <Route path="work" element={<Work />} />
        <Route path="services" element={<Serv />} />
        <Route path="department" element={<Department />} />

        <Route path="machine/:name"  element={<Machine />}>

        </Route>

      </Routes>
    </Suspense>
  </BrowserRouter>
)

