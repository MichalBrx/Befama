import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Work from './subpages/Work'
import Serv from './subpages/Serv'
import Department from './subpages/Department'

import App from './App'
import './index.css'
import './i18n'
import { Suspense } from 'react';

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3 className='z-20 font-bold w-full '>Loading..</h3>
  </div>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Suspense fallback={loadingMarkup}>
      <Routes >
        <Route path='/' element={<App />} />
        <Route path="Work" element={<Work />} />
        <Route path="Services" element={<Serv />} />
        <Route path="Department" element={<Department />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)
