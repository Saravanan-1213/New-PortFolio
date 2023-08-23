import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from "react";
import Reactjs from "../assets/React-1.jpeg";
import Nodejs from "../assets/Node.jpeg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am a Full Stack Developer. I also make the website server more &
          more interactive with web animations.
        </p>
        <a
          href="https://drive.google.com/file/d/1nygtfS96BihaQhcb_mOlxW4LpErAUiS6/view?usp=sharing"
          target="_blank"
        >
          <button className="btn">Download CV</button>
        </a>
        <br />
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Nodejs} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={Reactjs} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
