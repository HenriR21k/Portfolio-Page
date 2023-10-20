import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
  

    <Col size={12} sm={6} md={4}>
      <div className="proj-item-container">

        <img className="projimg" src={imgUrl} />

        <div className="proj-Header">
          {title}
        </div>
        <div className="proj-Description">
          {description}
        </div>
        <div className="proj-Buttons">
          <button>Github</button>
          <button>Live Demo</button>
        </div>


      </div>
    </Col>

   
  )
}
