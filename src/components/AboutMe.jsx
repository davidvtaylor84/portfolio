import React from "react";
import Image from "../images/about.png";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      {/* <div className="smallpicture">
        <img src={Image} alt="Me standing between two walls" />
      </div> */}
      <div className="aboutmebox">
        {/* <div className="about">
          <img src={Image} alt="Me standing between two walls" />
        </div> */}
        <div className="aboutText">
          <h2>About</h2>
          <p>
            David Valdez Taylor is a CodeClan 2022 graduate, based in Edinburgh,
            with a passion for coding and creative writing.
          </p>
          <p>
            After eight years of working in the book industry, he decided to
            take the leap into the world of coding and signed up for the
            CodeClan Professional Software Development course. Having graduated
            in 2022, he is now open to work and has a passion for creating
            elegant and innovative full-stack apps, working with Java,
            JavaScript and React.
          </p>
          <p>
            As a career-changer, he is determined to succeed in software
            development and keep up to date with all modern practices and
            technologies. He learns best by creating and innovating with code.
            In his spare time, he likes to create fun narrative based apps,
            looking to tell stories in new and ingenious ways.
          </p>
          <p>
            As an actor and writer, he also has great written and communication
            skills. In his spare time, he
            writes short stories, novels and, occasionally, poetry. He has
            starred in several amateur productions. Over the years, he has
            played an alien, a war criminal and a Cardinal.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
