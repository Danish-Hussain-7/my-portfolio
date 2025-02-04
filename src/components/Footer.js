import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      
      <a href="https://instagram.com/danish_hussain2003?igshid=MjEwN2IyYWYwYw==" target="_blank" rel="noopener noreferrer">
      <InstagramIcon />
          </a>
          <a href="https://twitter.com/Danish__7" target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/dani3761" target="_blank" rel="noopener noreferrer">
        <FacebookIcon />

        </a>

        <a href="https://www.linkedin.com/in/danish-hussain-7580ba256" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            </a>
      </div>
      <p> &copy; 2025 Danish </p>
    </div>
  );
}

export default Footer;
