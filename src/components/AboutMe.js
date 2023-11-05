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


export const AboutMe = () => {
  return (
    <section class="AboutMe" id="aboutme">
    <div class="container">
      <h1 class="title">About Me</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="section__pic-container1">
            <img src={profileImg} alt="Profile picture" class="about-pic1" />
          </div>
        </div>
        <div class="col-md-8">
          <div class="about-details-container1">
            <div class="row">
              <div class="col-md-6">
                <div class="about-containers1">
                  <div class="details-container1">
                    {/* <img src="./assets/experience.png" alt="" class="icon" /> */}
                    <h3>Experience</h3>
                    <p>1+ years <br />Frontend + Backend Development</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="about-containers1">
                  <div class="details-container1">
                    {/* <img src="./assets/education.png" alt="" class="icon" /> */}
                    <h3>Education</h3>
                    <p>B.Sc. Bachelors Degree<br />First Class with Honours</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-container1">
              <p>
                      A passionate and analytical individual with a strong foundation in programming languages, algorithms, 
                      data structures, and web and mobile app development technologies. 
                      I am eager to learn new technologies, take on challenging projects, 
                      and grow professionally in a supportive and dynamic work environment. 
                      As a Computer Science graduate, I am actively seeking a graduate position as a front-end developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  





    
    
  )
    
}
