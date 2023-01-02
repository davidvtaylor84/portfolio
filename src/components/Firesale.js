import React from "react";
import "./PythonProject.css";

const Firesale = () => {
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
          <h2>Firesale</h2>
          <p>This goofy story app was built using HTML, CSS, JavaScript and React. This was a fun one day project that I made to keep myself amused.</p>
          <h3>Description</h3>
          <p>
            A simple story telling app based on a piece I wrote - a satire on
            the attention economy.
          </p>
          <ul>
            <li>User advances the story by typing into the input box</li>
            <li>
              User can go a page by deleting a text box. Just click to delete.
            </li>
            <li>Demonstrates solid state management</li>
            <li>Combines my love of writing and coding</li>
            <li>The videos used in the app are my own. I enjoy making short films.</li>
            <li>Counts the number of entries and displays subsequent and previous pages accordingly</li>
          </ul>
          <h3>Extensions</h3>
          <ul>
            <li>Can be played on Vercel here: <a href="firesale.vercel.app/">Firesale</a></li>
          </ul>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default Firesale;
