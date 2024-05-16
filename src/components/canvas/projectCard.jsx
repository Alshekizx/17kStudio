import React from "react";
import "./projectCards.css";

function ProjectCard({
  backgroundImage,
  title,
  ViewMore,
  hashtag,
  hashtag2,
  hashtag3,
  hashtag4,
  hashtag5,
  hashtag6,
  onViewMore,
}) {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const makeHashtagTransparent = (hashtagValue) => {
    return hashtagValue ? {} : { opacity: 0 };
  };
  return (
    <div className="projectMain-card">
      <div className="projectSimple-card" style={cardStyle}>
        <a href={ViewMore} className="projectView-more-button">
          View More
        </a>
      </div>
      <div className="projectTitle">
        <p className="projectCard-title">{title}</p>
        <div className="hashtagDiv">
          <p
            className="hashtag hashtag1"
            style={makeHashtagTransparent(hashtag)}
          >
            {hashtag}
          </p>
          <p
            className="hashtag hashtag2"
            style={makeHashtagTransparent(hashtag2)}
          >
            {hashtag2}
          </p>
          <p
            className="hashtag hashtag3"
            style={makeHashtagTransparent(hashtag3)}
          >
            {hashtag3}
          </p>
          <p
            className="hashtag hashtag4"
            style={makeHashtagTransparent(hashtag4)}
          >
            {hashtag4}
          </p>
          <p
            className="hashtag hashtag4"
            style={makeHashtagTransparent(hashtag5)}
          >
            {hashtag5}
          </p>
          <p
            className="hashtag hashtag4"
            style={makeHashtagTransparent(hashtag6)}
          >
            {hashtag6}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
