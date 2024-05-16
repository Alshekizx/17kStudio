import React from "react";
import "./serviceCard.css";

function ServiceCard({ image, title, content, onViewMore, backgroundImage }) {
  const ServiceCardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust opacity here (0.5 for 50% opacity)
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="simple-card1" style={ServiceCardStyle}>
      <div style={overlayStyle}></div>
      <div className="cardDetail1">
        <h2 className="card-title1">{title}</h2>
        <p className="card-content1">{content}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
