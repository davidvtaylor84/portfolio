import React from 'react'
import './PythonProject.css';

const PythonProject = () => {
  return (
    <>
        <div className='videoDiv'>
          <iframe className='video' src="https://player.vimeo.com/video/762922879?h=68b6c7d5c1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="YouTube video player" border="0px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

      <div className='pythonBrief'>
        <h2>Pardon the Interufftion</h2>
        <p>The project was built using only:</p>
        <ul>
          <li>HTML/CSS</li>
          <li>Python</li>
          <li>Flask</li>
          <li>PostgreSQL</li>
        </ul>
        <h3>Description</h3>
        <p>I have built a web application to help a veterinary practice manage their animals and vets. A vet may look after MANY animals at a time. An animal is registered with only ONE vet.</p>
        <p>The practice wants to be able to register / track animals. Important information for the vets to know is: </p>
        <ul>
          <li>Name, Date of birth, Type of animal</li>
          <li>Contact details for the owner</li>
          <li>Treatment notes</li>
          <li>Be able to assign animals to vets</li>
          <li>CRUD actions for vets / animals</li>
        </ul>
        <h3>Extensions</h3>
        <p>I have also created a searchbar that searches the SQL database based on the animal name or the owners surname.</p>
      </div>
    </>
  )
}

export default PythonProject
