import React from 'react'
import './JavaProject.css'


const JavaProject = () => {
  return (
    <>
      <div className='videoDiv'>
        <iframe className='video' src="https://player.vimeo.com/video/772384082?h=87f7144e9e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="YouTube video player" border="0px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className='pythonBrief'>
      <h2>Point Pleasant</h2>
      <p>This text-based RPG was built using:</p>
      <ul>
        <li>Java</li>
        <li>Spring</li>
        <li>Java Swing</li>
        <li>MongoDB</li>
      </ul>
      <h3>Description</h3>
      <p>I used multiple classes, inheritance and polymorphism, all backed by an SQL database, to create a sprawling puzzle-based text adventure based on the Mothman legend. I have:</p>
      <ul>
        <li>Created an application that makes requests to my own database and saves data on characters, enemies, locations, and game items, allowing the user to save their progress</li>
        <li>Created a Graphical User Interface using a JFrame.</li>
        <li>Used structures that demonstrate a clear grasp of Object-Orientated modelling</li>
        <li>Been able to take input from the users choices and updated what they see and determine the outcome of encounters with other characters</li>
        <li>Created a player, enemies, items and locations for the adventure. The user is able to move between these locations</li>
      </ul>
      <h3>Extensions</h3>
        <p>I created an eye-catching GUI with images that change according to player encounters. It also features many puzzles to solve and a combat system with game logic.</p>
    </div>
    </>
  )
}

export default JavaProject