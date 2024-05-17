import React from "react";
import "./body.css";
import useScrollToTop from "./scrollToTop";
import PortfolioCard from "./PortfolioCard";
import FeaturedWork from "./featuredWork";

export default function Body() {
  useScrollToTop();
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
            src="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2FOIG4.jpeg?alt=media&token=638746f5-80df-4fe4-a146-83c13a8b28ee"
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
                src="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2Frobot.jpeg?alt=media&token=cd17032e-f84d-40f3-9855-088e7484ce51"
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
    </div>
  );
}
