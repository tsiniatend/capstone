import { Container, Row, Col } from "react-bootstrap";

import logo from '../assets/img/logo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer"> 
        <Container>
            <Row className="align-items-center">
            {/* <MailchimpForm /> */}
                    <Col sm={6}>
                        <img src={logo} alt="Logo"></img>
                    </Col>
                    <Col sm={6} className="text-center txt-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/tsiniate-endalkachew/" rel="noreferrer" target="_blank"><img src={navIcon1}/></a>
                          
                        </div>
            
                    </Col>
            </Row>
        </Container>
        </footer>
    )
}