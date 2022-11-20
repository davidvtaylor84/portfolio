import React from 'react'
import './PythonProject.css';


const JavaScriptProject = () => {
  return (
      <>
      <div className='videoDiv'>
        <iframe className='video' src="https://player.vimeo.com/video/762919755?h=762278e92a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="YouTube video player" border="0px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className='pythonBrief'>
      <h2>Holy Shiitake!</h2>
      <p>This healthy eating app was built using:</p>
      <ul>
        <li>HTML/CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul>
      <h3>Description</h3>
      <p>We identified a habit we'd like to help someone break or build (e.g. alcohol consumption, smoking, calories, exercise, healthy eating...) and made an app to help. This app that our team of four built in one week can:</p>
      <ul>
        <li>Let user search recipes based on a key word</li>
        <li>Fetch a random recipe from the API and re-fetches based on a button press</li>
        <li>Presents each recipe, an external link and an 'add to entry' button</li>
        <li>Create a diary entry including the recipe name, a date and notes from the user</li>
        <li>Displays the dates a user has entered a diary entry on</li>
        <li>Counts the number of entries and shows the user a 'level' of cooking they've achieved</li>
      </ul>
      <h3>My contributions</h3>
      <ul>
        <li>Full CRUD actions on the app - add, delete, edit.</li>
        <li>Navbar/hamburger menu.</li>
        <li>Mindfulness tip and reward system.</li>
      </ul>
    </div>
    </>
  )
}

export default JavaScriptProject