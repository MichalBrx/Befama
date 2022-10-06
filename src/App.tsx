import "./index.css"

import Navbar from './content/Navbar'
import Background from './content/Background'

import ScrollToTop from './functions/ScrollToTop'




function App() {


  return (
    <div className="bg-white">

      <ScrollToTop />
      <Navbar />
      <Background />

  
    </div>
  )
}


export default App
