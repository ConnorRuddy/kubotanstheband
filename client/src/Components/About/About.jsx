import React from 'react'
import './About.css'
import about from '../Assets/Photos/about.jpeg'

export const About = () => {
  return (
    <div className='about'>
      <div className="about-img-container">
        <img src={about} alt ='' className='about-pic' />
        </div>
      <div className=".about-bio-container">
        <h2 className="about-title">KUBOBIO</h2>
        <hr className='about-hr'/>
        <div className="about-bio">
            <p>
            Kubotans are a high-energy rock outfit conjuring a hook-heavy blend of psych, soul, and Americana. The quartet will release their debut self-titled EP in May, 2024.
            </p>
            <p>
            Kubotans are Bennett Walker Wales (Lead Vocals/Guitars), Nate Levine (Lead Guitars), Pat Spalding (Bass), and Drew Orton (Drums/Percussion)
              </p>
          </div>
        </div>
      
    </div>
  )
}
