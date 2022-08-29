import { Col } from "react-bootstrap";
import 'boxicons';


export const ProjectCard = ({ title, description, imgUrl,  linkUrl }) => {
    console.log(description)
    return (
        <Col sm={12} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="portfolio-overlay">
           
           
            <a href= {linkUrl}  rel="noreferrer" target="_blank" >
              <i className="bx bx-link-alt"></i>
            </a>
          </div>
                </div>

            </div>
        </Col>
    )
}