import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

    const projects = [
      {
        title: "Gateway Project",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Midterm Portfolio",
        description: "Proggression Check",
        imgUrl: projImg2,
      },
    ];
    

    const project2 = [
        {
          title: "Hope Hacks",
          description: "Addressing Oppresion",
          imgUrl: projImg4,
        },
        {
          title: "Netflix Redesign ",
          description: "Agile Methodology",
          imgUrl: projImg5,
        },
    ];
    
    const project3 = [
        {
          title: "E-commerce Project",
          description: "Full Stack Development",
          imgUrl: projImg3,
        }
    ];
    return (
     <section className="project" id='project'>
         {/* use react bootstrap tabs */}
         <Container>
             <Row>
                 <Col>
                 <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                 <h2>Projects</h2>
                 <p>After a rigorous six-month training program, I've experienced hands-on tech and professional training that lead me to complete the projects shown here.   </p>
                 </div>}
                 </TrackVisibility>
                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
                     <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab"> 
                     <Nav.Item>
                         <Nav.Link eventKey="first">Gateway</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                         <Nav.Link eventKey="second">Collaboration</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                         <Nav.Link eventKey="third">Personal Projects</Nav.Link>
                     </Nav.Item>

                     </Nav>
                     {/* we map through all the items we want to display on our first tab using the project card we made*/}
                     <Tab.Content>
                         <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index)=> {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project} />
                                            )
                                        })
                                    }
                                </Row>
                         </Tab.Pane>
                         <Tab.Pane eventKey="second">
                            <Row>
                            <Row>
                                    {
                                        project2.map((project2, index)=> {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project2} />
                                            )
                                        })
                                    }
                                </Row>
                            </Row>
                         </Tab.Pane>
                         <Tab.Pane eventKey="third">
                         {
                                        project3.map((project3, index)=> {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project3} />
                                            )
                                        })
                                    }
                         </Tab.Pane>
                     </Tab.Content>
                 </Tab.Container>
                 </Col>
             </Row>
         </Container>
         <img className="background-image-right" src={colorSharp2}></img>
     </section>
    )
  }