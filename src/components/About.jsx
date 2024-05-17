import React from "react";
import "./About.css";
import useScrollToTop from "./scrollToTop";

import Services from "./Service";
import { Link } from "react-router-dom";

const About = () => {
  useScrollToTop();
  return (
    <div className="AboutMainDiv">
      <div className="AboutDiv2ImageDiv">
        <div className="AboutHeaderDiv">
          <h1>About Us</h1>
          <p>
            passionate about crafting digital excellence and pushing boundaries
            of innovation
          </p>
        </div>
      </div>
      <div className="AboutintroDivDiv">
        <div className="AboutintroDiv">
          <h2>Welcome to 17k Studio</h2>
          <p>
            At 17k Studio, we bring ideas to life in the digital realm. With a
            passion for innovation and a commitment to excellence, we offer a
            comprehensive suite of creative and technical services to elevate
            your brand and business.
          </p>
        </div>
        <div className="AboutintroImgDiv">
          <img
            className=""
            src="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2Fcubes.jpg?alt=media&token=0dcc3861-4768-452b-b06f-9c91277c8224"
            alt="Description of the image"
          />
        </div>
      </div>

      <Services />
      <div className="WhyChooseDiv">
        <h2>Why choose us</h2>
        <div className="emptyDiv2" />
      </div>
      <div className="background-fixed">
        <div>
          <h2>Innovation meets creativity</h2>
          <p>
            Collaborative team embracing innovation and creativity. Space for
            ideas to shape the future.
          </p>
        </div>
        <div>
          <h2>Growth opportunities</h2>
          <p>
            Investing in professional development. Support continuous growth
            journey through conferences, workshops, and certifications.
          </p>
        </div>
        <div>
          <h2>Cutting-edge tech</h2>
          <p>
            Working with latest technologies. Pioneering groundbreaking
            solutions together.
          </p>
        </div>
      </div>
      <div className="AboutDiv2ImageDivx">
        <div className="AboutHeaderDivx">
          <h2>Need help in the digital world?</h2>
          <Link to="/Contact" className="ContactButton">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
