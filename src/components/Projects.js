import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import mealmate from "../assets/img/mealmate2.png";
import virtuteams from "../assets/img/VirtuTeam.png";
import diaryapp from "../assets/img/diaryapp2.png";
import scorecard from "../assets/img/scorecardapp2.png";
import portfolio from "../assets/img/thiswebsite2.png";
import first from "../assets/img/firstreact.png";

//import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "VirtuTeam",
      description: "This Web Application leveraged the React library and node.js to produce a tool aimed at facilitating students in managing and monitoring their tasks for a given project. Promoting collaboration by providing tools for students to provide feedback for their peer’s tasks, and allowing lecturers to the ability to monitor and create these projects for the students.",
      imgUrl: virtuteams,
      githubURL: "",
    },
    {
      title: "Portfolio Website",
      description: "I'm using Bootstrap to craft a dynamic portfolio website. This project is an opportunity to enhance my design abilities while showcasing my work. It's a platform for refining my design skills and presenting my portfolio. This website is still in development",
      imgUrl: portfolio,
      githubURL: "",
    },
    {
      title: "React First Project",
      description: "My first React project involved creating card-based modules display, allowing for module creation, updating, and deletion. This summer project enabled me to learn React.js and Express.js.",
      imgUrl: first,
      githubURL: "",
    },
    {
      title: "MealMate",
      description: "For my React Native project, I combined React Native for the frontend and Express.js for the backend to create a Recipe Blogging app. Its core mission was to offer users a platform to share their culinary creations and engage with fellow food enthusiasts.",
      imgUrl: mealmate,
      githubURL: "",
    },
    {
      title: "React Native First Project",
      description: "As my first React Native application assignment, I developed a mobile app for a local bowls club. The app digitized their scorecards, allowing for the recording of competition details, teams, players, and accumulative scores, all while maintaining a user-friendly interface designed for the older generation.",
      imgUrl: scorecard,
      githubURL: "",
    },
    {
      title: "Student Reading Diary App",
      description: "For an assignment, I created an Android app using Java in Android Studio for a local primary school. This app digitized student reading diaries, enabling the recording of date, title, page numbers read, and comments, while providing a child-friendly interface.",
      imgUrl: diaryapp,
      githubURL: "",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <p>View my</p>
                <h2>Projects</h2>
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
