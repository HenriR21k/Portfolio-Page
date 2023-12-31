import { Col } from "react-bootstrap";
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl, githubURL, demo }) => {

  const [overlayOpen, setOverlayOpen] = useState(false);

  const openOverlay = () => {
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  };
  let imgClassName = "projimg"

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-item-container">
        <img className={imgClassName} src={imgUrl} onClick={openOverlay} />
          <div className="proj-Header">
            {title}
          </div>
          <div className="proj-Description">
            {description}
          </div>
          <div className="proj-Buttons">
          {githubURL && (
            <button onClick={() => window.open(githubURL, "_blank")}>Github</button>
          )}
            {demo && (
            <button onClick={() => window.open(demo, "_blank")}>Live Demo</button>
          )}
          </div>
      </div>
      {overlayOpen && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="overlay-content">
            <img src={imgUrl} alt={title} />
          </div>
        </div>
      )}
    </Col>

   
  )
}


