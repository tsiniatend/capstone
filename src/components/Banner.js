import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "animate.css";
import TrackVisibility from 'react-on-screen';

import jump from "../assets/img/jump.png"

export const Banner = () => {
    // this will point to which word will display 
    const [loopNum, setLoopNum] = useState(0);
    // is the word being typed out or deleted
    const [isDeleting, setIsDeleting ] = useState(false);
    // words we are rotating
    const toRotate = [ "Web Developer", "Web Designer", "Learner"];
    // what text are we showing right now
    const[text, setText] = useState('');
    // using our period which is peiod of transtion and delta will see how fast the letter comes after typed 
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    // function respsonible for adding or delting letters, use tick to return everytime text updated 
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return() => { clearInterval(ticker)};
    },[text] )


    const tick = () => {
 //loop num is increasing to till we go back to first element 
        let i = loopNum % toRotate.length;

        let fullText = toRotate[i];
        //if the text is deleting then we will get the full text till its one letter less then tex,t or we will add a letter to display full text.
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
//if its deleting then we update the delta and compare it the previous
        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
//check if finsihed typing words if we are not deleting and its updated equal to full, we set deleting to true and delta back to period pace 
        if(!isDeleting && updatedText === fullText ){
            setIsDeleting(true);
            setDelta(period);
 //set deleting to false if deleting is done and updated text is empty so we start loop to add 
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
<section className="banner" id="home">
      <Container>
           {/* bootstrap styling for aligning center */}
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                 {/* Hold our Intro and wrap our paragraph  */}
                <h1>{`Heya! I'm Tsiniate`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Proud Apprentice graudate of RoadtoHire. Home to bright leaders in the making, here we master the necessary skill sets to
                  launch our careers as associate developers.</p>
              
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={jump} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}









