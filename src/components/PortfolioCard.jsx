import React from "react";
import "./PortfolioCard.css";

export default function PortfolioCard() {
  return (
    <div className="bodyDiv4">
      <div className="bodyDiv4First">
        <h2>Our Portfolio</h2>
        <div className="bodyDiv4ExploreAll">
          <p>Explore All</p>
        </div>
      </div>
      <div className="cardDiv">
        <div className="cardDetailDiv">
          <div className="cardDetail">
            <h2>01</h2>
            <div className="cardDetailLine" />
            <h3>Web App</h3>
          </div>
          <div className="cardDetail">
            <h2>02</h2>
            <div className="cardDetailLine" />
            <h3>Mobile App</h3>
          </div>
        </div>

        <div className="cardDetailDiv">
          <div className="cardDetail">
            <h2>03</h2>
            <div className="cardDetailLine" />
            <h3>Graphic Design</h3>
          </div>
          <div className="cardDetail">
            <h2>04</h2>
            <div className="cardDetailLine" />
            <h3>3D</h3>
          </div>
        </div>

        <div className="cardDetailDiv">
          <div className="cardDetail">
            <h2>05</h2>
            <div className="cardDetailLine" />
            <h3>Logo Creation</h3>
          </div>
          <div className="cardDetail">
            <h2>06</h2>
            <div className="cardDetailLine" />
            <h3>Print Designs</h3>
          </div>
        </div>

        <div className="cardDetailDiv">
          <div className="cardDetail">
            <h2>07</h2>
            <div className="cardDetailLine" />
            <h3>Illustration</h3>
          </div>
          <div className="cardDetail">
            <h2>08</h2>
            <div className="cardDetailLine" />
            <h3> Motion Graphics</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
