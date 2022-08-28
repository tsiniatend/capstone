// import { useState } from "react/cjs/react.production.min";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import contactImg1 from "../assets/img/naruto.png";
import contactHunt from "../assets/img/contact.png"

export const Contact = () => {
    const formInitialDetails = {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
    }

const [formDetails, setFromDetails] = useState(formInitialDetails);
const [buttonText, setButtonText] = useState('Send');
const [status, setStatus] = useState({});

const onFormUpdate = (category, value) => {
    setFromDetails({
        ...formDetails,
        [category]: value
    })
}

const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails)
    });
    setButtonText("Send");
    let result = response.json();
    setFromDetails(formInitialDetails);
    if (result.code === 200){
        setStatus({
            success: true, message: 'Message Sent Successfully'
        });
    } else {
        setStatus({
            success: false, messgae: 'Something went wrong bro, try again later.'
        });
    }
};
    return (
<section className="contact" id="connect">
<Container>
    <Row className="align-items-center">
        <Col md={6}>
            <img src={contactHunt} alt="Contact Us"></img>
        </Col>
        <Col md={6}>
            <h2>Get In Touch </h2>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder= "First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}></input>
                    </Col>
                    <Col sm={6} className="px-1">
                       <input type="text" value={formDetails.lastName} placeholder= "last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}></input>
                    </Col>
                    <Col sm={6} className="px-1">
                       <input type="text" value={formDetails.email} placeholder= "Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}></input>
                    </Col>
                    <Col sm={6} className="px-1">
                       <input type="text" value={formDetails.phone} placeholder= "Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}></input>
                    </Col>
                    <Col>
                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}>

                    </textarea>
                    <button type="submit">
                    <span>{buttonText}</span>
                    </button>
                    </Col>
                    {
                        status.message &&
                        <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                    }
                </Row>
            </form>
        </Col>
    </Row>
</Container>
</section>
    )
}