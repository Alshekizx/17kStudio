import React from "react";
import "./cardComponent.css";

function CardContainer({ image, title, onViewMore }) {
  return (
    <div className="simple-card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <button onClick={onViewMore} className="view-more-button">
        View More
      </button>
    </div>
  );
}

export default CardContainer;
