import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, techStack, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
       
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <span className="tech-stack"><strong>Tech Stack</strong> : {techStack}</span>
        </div>
      </div>
      <div className="project-buttons">
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules">
        <button className="view-project"><span>View Project</span></button>
        </a>
        
        <button className="view-project"><span>View Code</span></button>
       
      </div>
     
    </Col>
  )
}
