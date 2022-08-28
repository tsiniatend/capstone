import { Col } from "react-bootstrap";
import 'boxicons';


export const ProjectCard = ({ title, description, imgUrl,  linkUrl }) => {
    return (
        <Col sm={12} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div class="portfolio-overlay">
           
            <a href="">
              <i class="bx bx-link-alt"></i>
            </a>
          </div>
                </div>

            </div>
        </Col>
    )
}