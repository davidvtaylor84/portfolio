import React from 'react'
import Image from '../images/about.png'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <>
        <div className='about'>
            <img src={Image} alt='Me standing between two walls'/>
        </div>
    </>
  )
}

export default AboutMe