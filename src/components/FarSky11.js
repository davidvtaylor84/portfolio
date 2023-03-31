import React from 'react'
import "./PythonProject.css";


const FarSky11 = () => {
  return (
    <>
    <div className="description">
      <div className="videoDiv">
        <iframe
          className="video"
          src="https://player.vimeo.com/video/813101529?h=716bf5fbf2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          title="YouTube video player"
          border="0px"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="pythonBrief">
          <br></br>
        <h2>Far Sky 11 Science-Fiction Library</h2>
        <p>Console based library system written over the course of a week. Uses Java, IntelliJ, and various libraries.</p>
        <h3>Description</h3>
        <p>
          I have created a library system that runs in the console demonstrating aspects of Java I have learned since the end of the course (including lambdas and streams). 
        </p>
        <ul>
          <li>CRUD functionality on books and library members. Books and members can be added, books can be loaned out, titles can be listed and searched for etc.</li>
          <li>
            Demonstrates use of lambdas and streams.
          </li>
          <li>Log-in and Password system in place so only library staff can use this app.</li>
          <li>The app calculates overdue fees and does not allow members to borrow books if their late fees are over a certain amount.</li>
          <li>Simple yet intuitive interface design.</li>
        </ul>
        <h3>Extensions</h3>
  
        <p>GitHub Link: <a href="https://github.com/davidvtaylor84/Java-Library-App">here</a></p>
      </div>
    </div>
    <br></br>
  </>
  )
}

export default FarSky11