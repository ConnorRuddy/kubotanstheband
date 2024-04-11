import { useState } from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { MainPage } from './Pages/MainPage'
import {AboutPage} from './Pages/AboutPage'
import {TourPage} from './Pages/TourPage'
import {Footer} from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <MainPage />
      <AboutPage />
      <TourPage />
      <Footer />
    
    </>
  )
}

export default App
