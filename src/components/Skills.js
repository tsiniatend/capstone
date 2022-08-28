import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../Heading";
import profile from "./selfie.jpeg";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5
        },
       dsktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0},
            items: 1
        },
    };

    return (
        <section className="skill" id="skills"> 
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>
                        Skills
                    </h2>
                <p> yadya yadyay dyaydsay dfyadyaf day fdayfd fdyad fyad fayd  yga fa
                    </p>
                    <section id="about">
			<Heading heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
					Apprentice actively learning and building a foundation for a long-lasting career in software engineering. Proficient ability to adapt to new technologies with a creative mindset that never turns down a challenge. 
					</p>
					<p className={styles.desc}>
					Focus on bringing out the best in fellow team members, creating strong relationships, and pushing for real results. With strong communication skills, and a constant drive to always be better than yesterday.
					</p>
				</div>
				<div className={styles.right}>
					<img
					
						src={profile}
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
                    {/* <Carousel responsive={responsive} infinte={true} className="skill-slider">
                        <div className="item">
                            <img src={meter2} alt="Image" />
                            <h5> Web Development </h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="Image" />
                            <h5> Collaboration </h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="Image" />
                            <h5> JavaScript </h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt="Image" />
                            <h5> Agile </h5>
                        </div>

                    </Carousel> */}
                </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp}/> 
        </section>
    )
}