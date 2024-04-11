import React from 'react'
import { FaSpotify } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import instagram from '../Assets/Photos/instagram.png'
import { AiOutlineMail } from "react-icons/ai";
import './LinkWidget.css'
import main from '../Assets/Photos/main.jpeg'
import bandname from '../Assets/Photos/bandname.png'

export const LinkWidget = () => {
  return (
    <div className='link-widget'>
      <div className='link-widget-band'>
      <img src={main} className='link-picture' alt='kubotans-pic'/>
      <img src={bandname} className='link-bandname' alt='kubotans-name'/>
      </div>
      <ul className='link-widget-list'>
      {/* <a href="https://open.spotify.com/" className='slide'><li className='link-widget-item'><div className="logo-container"><FaSpotify className='spotify-logo'/></div><p className='link-p' id='spotify-p'>SPOTIFY</p></li></a>
        <hr/>
        <a href="https://soundcloud.com/" className='slide'><li className='link-widget-item'><div className="logo-container"><FaSoundcloud className='soundcloud-logo'/></div><p className='link-p' id='soundcloud-p'>SOUNDCLOUD</p></li></a>
        <hr/> */}
        <a href="https://www.instagram.com/kubotansband/" className='slide'><li className='link-widget-item'><div className="logo-container"><img src ={instagram} className='instagram-logo'/></div><p className='link-p' id='instagram-p'>INSTAGRAM</p></li></a>
        <hr/>
        <a href ='https://www.facebook.com/bwwmusic/' className='slide'><li className='link-widget-item'><div className="logo-container"><FaFacebook className='facebook-logo'/></div><p className='link-p'id='facebook-p' >FACEBOOK</p></li></a>
        <hr/>
        <a href="https://gmail.us18.list-manage.com" className='slide'><li className='link-widget-item'><div className="logo-container"><AiOutlineMail className='email-logo'/></div><p className='link-p' id='email-p'>Join Our Mailing List</p></li></a>
        <hr/>
        </ul>
    </div>
  )
}
