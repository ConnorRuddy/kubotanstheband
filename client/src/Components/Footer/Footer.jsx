import React from 'react'
import './Footer.css'
import logo from '../Assets/Photos/logo.jpeg'
import instagram from '../Assets/Photos/instagram.png'
import bandname from '../Assets/Photos/bandname.png'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-title'>
       <img src ={instagram} alt='instagram-logo' className='footer-insta'/>
      <h3>Follow the band on Instagram</h3>
       
       </div>
      <div className="footer-links">
        <a href ='https://www.instagram.com/kubotansband/' className='bandmember-link'>KuboAccount - @Kubotansband</a>
        <a href ='https://www.instagram.com/kubotansband/' className='bandmember-link'>Bennett Walker Whales - @bennettwalkerwales</a>
        <a href ='https://www.instagram.com/nateisstoked/' className='bandmember-link'>Nate Levine - @nateisstoked</a>
        <a href ='https://www.instagram.com/dreworton/' className='bandmember-link'>Drew Orton - @dreworton</a>
        <a href ='https://www.instagram.com/patspalding_bass/' className='bandmember-link'>Pat Spalding - @patspalding_bass</a>
      </div>
      
     <div className='thankyou-container'>
       <img Src={bandname} alt='kubotans' className='bandname' />
       <p>THANKS YOU FOR ALL YOUR SUPPORT!</p>
       </div>
    
    </div>
    // <img src={logo} className='footer-logo' alt='footer-logo' />
    
  )
}

