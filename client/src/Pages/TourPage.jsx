import React from 'react'
import { Album } from '../components/Album/Album'
import { Tour } from '../components/Tour/Tour'
import './Css/TourPage.css'
import redboat from '../Components/Assets/Photos/redboat.jpeg'

export const TourPage = () => {

  return (
    <div id='tour'style={{ backgroundImage: `url(${redboat})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: '50% 60%' }}className='tour-container'>
      <Tour />
      <Album />
    </div>
  )
}
