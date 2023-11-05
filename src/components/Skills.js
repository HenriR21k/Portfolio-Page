import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

import reactImg from "../assets/img/physics.png";
import HTML from "../assets/img/html.png";
import css from "../assets/img/css-3.png";
import node from "../assets/img/nodejs.png";
import express from "../assets/img/expressjs.png";
import Junit from "../assets/img/junit.png";
import Java from "../assets/img/java.png";
import python from "../assets/img/python.png";
import javascript from "../assets/img/js.png";
import mysql from "../assets/img/mysqllogo.png"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Skills developed over the past three years.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={reactImg} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={reactImg} alt="Image" />
                                <h5>React Native</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={HTML} alt="Image" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" />
                                <h5>Express.js</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={Junit} alt="Image" />
                                <h5>JUnit Testing</h5>
                            </div>
                            <div className="item">
                                <img src={Java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
