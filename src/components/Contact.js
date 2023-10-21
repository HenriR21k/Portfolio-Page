import { useState } from "react";
import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import 'animate.css';


export const Contact = () => {

  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_er0ozhr', 'template_atgo7vf', form.current, 'o8U9qu_3Y0VaPrKj1')
      .then((result) => {
          console.log(result.text);
          console.log(form.current);
          setStatus({ message: "Email sent successfully", success: true });
          setButtonText('Sent');
      }, (error) => {
          console.log(error.text);
          setStatus({ message: "Email sending failed", success: false });
          setButtonText('Failed');
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <div className="contactform">
          <h2>Get In Touch</h2>
          <form ref={form} onSubmit={sendEmail}> {/* Use the sendEmail function for the form submission */}
            <Row>
              {/* Input fields and styling */}
              <Col size={12} sm={6} className="px-1">
                <label>Name</label>
                <input type="text" name="user_name" />
              </Col>
              <Col size={12} sm={6} className="px-1">
                <label>Email</label>
                <input type="email" name="user_email" />
              </Col>
              <Col size={12} sm={12} className="px-1">
                <label>Message</label>
                <textarea name="message" />
              </Col>
              <Col size={12} className="px-1">
                <button type="submit"><span>{buttonText}</span></button>
              </Col>
              {
                status.message &&
                <Col>
                  <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                </Col>
              }
            </Row>
          </form>
        </div>
      </Container>
    </section>
  )

}
