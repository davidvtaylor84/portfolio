import React from "react";
import "./PythonProject.css";

const Fomalhaut= () => {
  return (
    <>
      <div className="description">
        <div className="videoDiv">
          <iframe
            className="video"
            src="https://player.vimeo.com/video/785750186?h=8eab4cfc16&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="YouTube video player"
            border="0px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="pythonBrief">
            <br></br>
          <h2>Tito's Food of Fomalhaut</h2>
          <p>Website for a fictional takeaway restaurant with React frontend, Spring/Hibernate Server and Firebase database.</p>
          <h3>Description</h3>
          <p>
            This app originally started off as one for a Filipino restaurant but evolved into a menu for a fictional cuisine for a island nation run by a despotic General at war with a faction of Philosophers.
          </p>
          <ul>
            <li>Demonstrates state management in React.</li>
            <li>
              A separate backend creates an API with all the menu items.
            </li>
            <li>Shows off my CSS skills, such as they are.</li>
            <li>Combines my love of writing and coding.</li>
            <li>Posts all orders, including customer data and food orders to a Firebase Database.</li>
            <li>Uses Java, JavaScript, React, Hibernate, HTML, CSS, Spring Boot and Firebase.</li>
          </ul>
          <h3>Extensions</h3>
    
          <p>GitHub Link: <a href="https://github.com/davidvtaylor84/filipino_kitchen">here</a></p>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default Fomalhaut;
