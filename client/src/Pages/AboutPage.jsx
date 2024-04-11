import React from 'react'
import {About} from '../Components/About/About'
import './Css/AboutPage.css'
import couch from '../Components/Assets/Photos/couch.jpg'


export const AboutPage = () => {
  return (
    <div  id ='about' style={{ backgroundImage: `url(${couch})`,backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundAttachment: 'fixed', backgroundPosition: '50% 50%' }}className='about-container'>
      <About />
    </div>
  )
}
