import React from "react";
import "./featuredWork.css";
import { CardContainer } from "./canvas";
import robot from "../assets/robot.jpeg";

function FeaturedWork() {
  return (
    <div className="mainDiv">
      <h2 className="FeaturedWork">FeaturedWork</h2>
      <div className="FeaturedWorkListDiv">
        <ul className="FeaturedWorkList">
          <li>All</li>
          <li>Mobile Apps</li>
          <li>Websites</li>
          <li>Graphic Design</li>
          <li>3D</li>
        </ul>
      </div>
      <div className="grid-container">
        <CardContainer
          image={robot}
          title="Innovative Business Platform Design"
        />
        <CardContainer image={robot} title="Interactive Mobile App" />
        <CardContainer image={robot} title="Elegant Brand Identity" />
        <CardContainer image={robot} title="Sleek Web Application" />
        <CardContainer image={robot} title="Efficient Dashboard Design" />
        <div className="viewMoreButtonDiv">
          <button className="viewMoreButton">View More</button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedWork;
