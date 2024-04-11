import React from 'react'
import {LinkWidget} from '../Components/LinkWidget/LinkWidget'
import './Css/MainPage.css'
import tire from '../Components/Assets/Photos/tire.jpg'

export const MainPage = () => {
  return (
    <div  id='main'style={{ backgroundImage: `url(${tire})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: '50% 50%' }}className='main-container'>
      <LinkWidget />
    </div>
  )
}
