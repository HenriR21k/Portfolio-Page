import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark.svg';

import linkedIn from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";

import CV from '../assets/HenriRoquainCV.pdf';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import profileImg from "../assets/img/face-modified.png";

export const Banner = () => {
    return (
      <div className="Banner" id='home'>
            <section id="profile">
                <div class="section__pic-container">
            <img src={profileImg} alt="Henri profile picture" />
        </div>
        <div class="section__text">
            <div className="section__text__p1">Hello, I'm</div>
            <h1 class="title">Henri Roquain</h1>
            <div className="section__text__p2">Frontend Developer</div>
            <div class="btn-container">
              <button class="btn-color-2" onClick={() => window.open(CV)}>
                  Download CV
              </button>
                <Router>
                  <HashLink to='#connect'>
                    <button class="btn-color-2">
                        Contact Me
                    </button>
                  </HashLink>
                </Router>
            </div>
              <div id="socials-container">
              <a href="https://www.linkedin.com/in/henri-roquain-b9b300204/"><img src={linkedIn} class="icon" alt="" /></a>
               <a href="https://github.com/HenriR21k"><img src={github} class="icon" alt="" /></a>
              </div>
            </div>
        </section>
      </div>
    )
  }