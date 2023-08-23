import "./FooterStyles.css";
import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Coimbatore, Tamil Nadu</p>
              <p>INDIA</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 7548825655
            </h4>
          </div>
          <div className="email">
            <h4>
              <br />
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              saravanansekar033@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Social Media</h4>

          <div className="social">
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <p>SaraVanan S</p>
            <br />
            <FaGithub
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <p>@Saravanan-1213</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
