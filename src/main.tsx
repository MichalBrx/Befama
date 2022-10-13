import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Work from './subpages/Work';

import Department from './subpages/Department';
import Machine from './subpages/Machine';
import Serv from './subpages/Serv';
import Loading from './content/Loading';


import App from './App'
import './index.css'
import './i18n'
import { Suspense, useEffect } from 'react';




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
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

