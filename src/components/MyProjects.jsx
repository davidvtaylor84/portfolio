import React from "react";
import "./PythonProject.css";
import Firesale from "./Firesale";

const MyProjects = () => {
  return (
    <>
    <Firesale/>
      <div className="description">
        <div className="videoDiv">
          <iframe
            className="video"
            src="https://player.vimeo.com/video/772384082?h=87f7144e9e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="YouTube video player"
            border="0px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="pythonBrief">
          <br></br>
          <h2>Point Pleasant</h2>
          <p>
            This text-based RPG was built using Java, Spring, Java Swing and
            MongoDB.
          </p>
          {/* <p>This text-based RPG was built using:</p> */}
          {/* <ul>
      <li>Java</li>
      <li>Spring</li>
      <li>Java Swing</li>
      <li>MongoDB</li>
    </ul> */}
          <h3>Description</h3>
          <p>
            I used multiple classes, inheritance and polymorphism, all backed by
            an SQL database, to create a sprawling puzzle-based text adventure
            based on the Mothman legend. I have:
          </p>
          <ul>
            <li>
              Created an application that makes requests to my own database and
              saves data on characters, enemies, locations, and game items,
              allowing the user to save their progress
            </li>
            <li>Created a Graphical User Interface using a JFrame.</li>
            <li>Used structures that demonstrate a clear grasp of
              Object-Orientated modelling
            </li>
            <li>
              Been able to take input from the users choices and updated what
              they see and determine the outcome of encounters with other
              characters
            </li>
            <li>
              Created a player, enemies, items and locations for the adventure.
              The user is able to move between these locations
            </li>
          </ul>
          <h3>Extensions</h3>
        
            <p>
              Created a GUI that changes according to
              player encounters.
            </p>
            
              <p>Features puzzles to solve and a combat system with game logic.</p><br></br>
            
          
          <p>GitHub Link:<a href="https://github.com/davidvtaylor84/PointPleasantGame">here</a></p>
        </div>
      </div>
      <br></br>
      <div className="description">
        <div className="videoDiv">
          <iframe
            className="video"
            src="https://player.vimeo.com/video/762919755?h=762278e92a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="YouTube video player"
            border="0px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="pythonBrief">
          <br></br>
          <h2>Holy Shiitake!</h2>
          <p>
            This healthy eating app was built using HTML, CSS, JavaScript,
            React, Express, node.js and MongoDB.
          </p>
          {/* <p>This healthy eating app was built using:</p> */}
          {/* <ul>
        <li>HTML/CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul> */}
          <h3>Description</h3>
          <p>
            We identified a habit we'd like to help someone break or build (e.g.
            alcohol consumption, smoking, calories, exercise, healthy eating...)
            and made an app to help. This app that our team of four built in one
            week can:
          </p>
          <ul>
            <li>Let user search recipes based on a key word</li>
            <li>
              Fetch a random recipe from the API and re-fetches based on a
              button press
            </li>
            <li>
              Presents each recipe, an external link and an 'add to entry'
              button
            </li>
            <li>
              Create a diary entry including the recipe name, a date and notes
              from the user
            </li>
            <li>Displays the dates a user has entered a diary entry on</li>
            <li>
              Counts the number of entries and shows the user a 'level' of
              cooking they've achieved
            </li>
          </ul>
          <h3>My contributions</h3>
          <ul>
            <li>Full CRUD actions on the app - add, delete, edit.</li>
            <li>Navbar/hamburger menu.</li>
            <li>Mindfulness tip and reward system.</li>
          </ul>
          <p>GitHub Link:<a href="https://github.com/HelenLangers/Holy_Shiitake_habit_tracker_project">here</a></p>
        </div>
      </div>
      <br></br>
      <div className="description">
        <div className="videoDiv">
          <iframe
            className="video"
            src="https://player.vimeo.com/video/762922879?h=68b6c7d5c1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="YouTube video player"
            border="0px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="pythonBrief">
          <br></br>
          <h2>Pardon the Interufftion</h2>
          <p>
            The project was built using only HTML/CSS, Python, Flask and
            PostgreSQL.
          </p>
          {/* <ul>
          <li>HTML/CSS</li>
          <li>Python</li>
          <li>Flask</li>
          <li>PostgreSQL</li>
        </ul> */}
          <h3>Description</h3>
          <p>
            I have built a web application to help a veterinary practice manage
            their animals and vets. A vet may look after MANY animals at a time.
            An animal is registered with only ONE vet.
          </p>
          <p>
            The practice wants to be able to register / track animals. Important
            information for the vets to know is:{" "}
          </p>
          <ul>
            <li>Name, Date of birth, Type of animal</li>
            <li>Contact details for the owner</li>
            <li>Treatment notes</li>
            <li>Be able to assign animals to vets</li>
            <li>CRUD actions for vets / animals</li>
          </ul>
          <h3>Extensions</h3>
          <p>
            I have also created a searchbar that searches the SQL database based
            on the animal name or the owners surname.
          </p>
          <p>GitHub Link:<a href="https://github.com/davidvtaylor84/vet_management_app">here</a></p>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
