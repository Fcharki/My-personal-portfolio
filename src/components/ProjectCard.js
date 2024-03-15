import { Col } from "react-bootstrap";
import '../app.css';

export const ProjectCard = ({ title, description, imgUrl, btnMsg, source }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} className="project-img img-fluid" />
        <div className="proj-txtx">
          <h2>{title}</h2>
          <span><h5 style={{padding: "10px"}}>{description}</h5></span>
          <div>
          <a className="btn btn-warning card-btn" target="_blank" href={source}>{btnMsg}</a>
          </div>

        </div>
      </div>
    </Col>
  )
}
