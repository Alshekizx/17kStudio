import React from "react";
import "./body.css";
import OIG4 from "../assets/OIG4.jpeg";
import robot from "../assets/robot.jpeg";
import PortfolioCard from "./PortfolioCard";
import FeaturedWork from "./featuredWork";

export default function Body() {
  return (
    <div className="bodyDiv">
      <div className="bodyDiv2">
        <div>
          <h1>Explore Stunning Software and Design Creations</h1>
          <p>
            Welcome to DeveloperDesignerPortfolio, where innovation meets
            creativity. Our work showcases a blend of cutting-edge software
            development and captivating graphic design, tailored to elevate your
            digital presence.
          </p>
        </div>
        <div className="bodyDiv2ImageDiv">
          <img
            className="bodyDiv2Image"
            src={OIG4}
            alt="Description of the image"
          />
        </div>
      </div>

      <div className="bodyDivNav">
        <ul className="bodyDivNavList">
          <li>Website</li>
          <li>Mobile</li>
          <li>Graphics</li>
          <li>Logos</li>
          <li>Prints</li>
        </ul>
      </div>
      <div className="bodyDiv3">
        <h2>Discover a Diverse Range of Projects Tailored to Impress.</h2>
        <div className="bodyDiv3Second">
          <div className="bodyDiv3SecondCircle"></div>
          <div className="bodyDiv3ImageMainDiv">
            <div className="bodyDiv3ImageDiv">
              <img
                className="bodyDiv3Image"
                src={robot}
                alt="Description of the image"
              />
            </div>
            <div className="bodyDiv3DetailDiv">
              <p>Detail</p>
            </div>
          </div>
        </div>
      </div>

      <PortfolioCard />
      <FeaturedWork />
    </div>
  );
}
