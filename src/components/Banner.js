import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import profileImg from "../assets/img/profile.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark.svg';
import CV from '../assets/HenriRoquainCV.pdf';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";


export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                <h1>{`Hi! I'm Henri Roquain`} </h1>
                  <p>An aspiring front-end developer. A passionate and analytical individual with a strong foundation in programming languages, algorithms, 
                    data structures, and web and mobile app development technologies. 
                    These were gained through two major projects: The Teamwork Collaboration Tool and Meal Mate which was 
                    successfully completed during the final academic year. 
                    I am eager to learn new technologies, take on challenging projects, 
                    and grow professionally in a supportive and dynamic work environment. 
                    As a Computer Science graduate, I am actively seeking a graduate position as a front-end developer.</p>
                  <div className="profileBtn">  
                    <button onClick={() => window.open(CV)}>View CV</button>
                    <Router>
                      <HashLink to='#connect'>
                      <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                      </HashLink>
                    </Router>

                  </div>
              {/* </div>} */}
            {/* </TrackVisibility> */}
          </Col>
          <Col xs={12} md={6} xl={3}>
            {/* <TrackVisibility>
              {({ isVisible }) => */}
                {/* <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> */}
                  <img src={profileImg} alt="Header Img"/>
                    <span className="navbar-text">
                      <div className="social-icon">
                        <a href="https://www.linkedin.com/in/henri-roquain-b9b300204/"><img src={navIcon1} alt="" /></a>
                        <a href="https://github.com/HenriR21k"><img src={navIcon2} alt="" /></a>
                      </div> 
                    </span>
                 {/* </div>  */}
                {/* } */}
            {/* </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
