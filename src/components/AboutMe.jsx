import React from "react";
import "./AboutMe.css";
import Image from "./../images/pictureofme.jpeg";

const AboutMe = () => {
  return (
    <>
    {/* <div className="mothman">
          <img src={Image} alt="wearable computer" />
        </div> */}
        <div className="aboutmebox">
          <div className="aboutText">
            <h2>About</h2>
            <p>
              David Valdez Taylor is a CodeClan 2022 graduate, based in
              Edinburgh, with a passion for coding and creative thinking.
            </p>
            <p>
              His proudest programming achievement so far is creating an RPG in
              Java based on the Mothman legend, featuring aliens, UFOs and weird
              goings-on in wholesome small town America. It features player stat
              advancement, side-quests, items to pick up and battles with Men in
              Black. See his GitHub for details.
            </p>
            <p>
              After eight years as a supervisor in Blackwell's bookshop, he
              decided to take the leap into the world of coding and signed up
              for the CodeClan Professional Software Development course. He is
              now open to work and has a passion for creating elegant and
              innovative full-stack apps, working with Java, JavaScript and
              React.
            </p>
            <p>
              As a career-changer, he is determined to succeed in software
              development and keep up to date with all modern practices and
              technologies. He learns best by creating and innovating with code.
              In his spare time, he likes to create fun narrative based apps,
              looking to tell stories in new and ingenious ways.
            </p>
            <p>
              In his spare time, he writes short stories, novels and,
              occasionally, poetry. He is also an actor and has starred in
              several amateur productions. Over the years, he has played an
              alien, a war criminal and a Cardinal. This versatility carries
              over into all aspects of his life.
            </p>
          </div>
        </div>
      <div className="smallpicture">
        <img src={Image} alt="Me standing between two walls" />
      </div>
    </>
  );
};

export default AboutMe;
