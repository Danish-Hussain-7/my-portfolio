
import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import profileImage from "../assets/me.jpg";


function Home() {
  return (
    <div className="home">
      <div className="about">
        
      <img src={profileImage}  className="profile-image" />
        <h2> Hi, my name is Danish Hussain</h2>
        <div className="prompt">
        
          <p>A recent Software Engineering graduate passionate about building innovative web applications.</p>
          <p> Experienced in React.js, JavaScript, and C#.</p>
          <a href="https://www.linkedin.com/in/danish-hussain-7580ba256" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:danish7860@outlook.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/Danish-Hussain-7" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, NPM,
               MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, MySQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java,C#,Xamarin,</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
