import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import mealmate from "../assets/img/mealmate.png";
import virtuteams from "../assets/img/VirtuTeam.png";
import diaryapp from "../assets/img/diaryapp.png";
import scorecard from "../assets/img/scorecardapp.png";
import portfolio from "../assets/img/thiswebsite.png";
import first from "../assets/img/firstreact.png";

//import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "VirtuTeam",
      description: "Design & Development",
      imgUrl: virtuteams,
      githubURL: "",
    },
    {
      title: "MealMate",
      description: "Design & Development",
      imgUrl: mealmate,
      githubURL: "",
    },
    {
      title: "React First Project",
      description: "Design & Development",
      imgUrl: first,
      githubURL: "",
    },
    {
      title: "Portfolio Website",
      description: "Design & Development",
      imgUrl: portfolio,
      githubURL: "",
    },
    {
      title: "React Native First Project",
      description: "Design & Development",
      imgUrl: scorecard,
      githubURL: "",
    },
    {
      title: "Student Reading Diary App",
      description: "Design & Development",
      imgUrl: diaryapp,
      githubURL: "",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
        
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>

  


  )
}
