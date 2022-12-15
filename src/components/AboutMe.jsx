import React from 'react'
import Image from '../images/about.png'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className='aboutmebox'>
        <div className='about'>
            <img src={Image} alt='Me standing between two walls'/>
        </div>
        <div className='aboutText'>
            <h2>About Me</h2>
            <p>My name is David Valdez Taylor and I am a CodeClan 2022 graduate based in Edinburgh with a passion for coding and creative writing.</p>
            <p>After eight years of working in the book industry, I decided to take the leap into the world of coding and signed up for the CodeClan Professional Software Development course. Having graduated in November 2022, I am now open to work and have a passion for creating elegant and innovative full-stack apps, working with Java, JavaScript and React.</p>
            <p>As a career-changer, I am determined to succeed in software development and keep up to date with all modern practices and technologies. I learn best by creating and innovating with code. In my spare time, I like to create fun narrative based apps, looking for ways to tell stories in new and ingenious ways.</p>
            <p>As an actor and writer, I also have great written and communication skills, as well as years of customer service experience in the hospitality and retail industry. Collaboration comes naturally to me. I have written short stories, novels and occasionally write poetry. I have acted in several amateur productions. Over the years, I have played an alien, a war criminal and a Cardinal.</p>
        </div>
    </div>
  )
}

export default AboutMe