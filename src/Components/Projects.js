import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import spaceCityLogo from "../spacecitylogo.jpg";
import dndLogo from "../DungeonsAndDragons.jpeg";
import superCrewmateWorldLogo from "../crewmateImg.png";
import triviaOnline from "../TechAndLanguageLogos/TriviaOnlineLogo.png";

function Projects() {
  return (
    <Container id="projectsContainer">
      <h1 className="projectsH1">My Projects</h1>
      <p className="projects-subheader">
        (Note: Because Heroku ended the free tier projects I am linking the
        github repos and the YouTube demo links for some of the early projects!
        :D)
      </p>
      <br />
      <Row id="projectsRow">
        <Card
          className="projectCards"
          bg="dark"
          text="light"
          border="dark"
          style={{ margin: "25px", padding: "5px", width: "18rem" }}
        >
          <Card.Img variant="top" src={triviaOnline} />
          <Card.Body>
            <Card.Title>Trivia Online</Card.Title>
            <div className="title-container">
              <a
                className="card-links"
                target="_blank"
                rel="noreferrer"
                href="https://trivia-online.vercel.app/"
              >
                Play
              </a>
            </div>
            <Card.Text>
              A trivia game built with SvelteKit that challenges you to answer
              as many questions possible! You can choose from four categories
              and place your name on the leaderboard! (No GitHub link for
              security reasons)
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="projectCards"
          bg="dark"
          text="light"
          border="dark"
          style={{ margin: "25px", padding: "5px", width: "18rem" }}
        >
          <Card.Img variant="top" src={superCrewmateWorldLogo} />
          <Card.Body>
            <Card.Title>Super Crewmate World</Card.Title>
            <div className="title-container">
              <a
                className="card-links"
                target="_blank"
                rel="noreferrer"
                href="https://heyneek.itch.io/super-crewmate-world"
              >
                Play
              </a>
              <a
                id="card-github-link"
                className="card-links"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/HeyNeek/superamongusworld"
              >
                GitHub
              </a>
            </div>
            <Card.Text>
              A short fun platforming game I built and exported with Godot, and
              deployed to the web. It has three levels and can be played on the
              browser!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="projectCards"
          bg="dark"
          text="light"
          border="dark"
          style={{ margin: "25px", padding: "5px", width: "18rem" }}
        >
          <Card.Img variant="top" src={spaceCityLogo} />
          <Card.Body>
            <Card.Title>Space City Coffee</Card.Title>
            <div className="title-container">
              <a
                className="card-links"
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=oi2WjwFdS8U&ab_channel=NickAguirre"
              >
                Demo
              </a>
              <a
                id="card-github-link"
                className="card-links"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/HeyNeek/space-city-coffee"
              >
                GitHub
              </a>
            </div>
            <Card.Text>
              A site I built in React that lets you browse through Houston's
              local coffee shops, create an account, and leave reviews!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="projectCards"
          bg="dark"
          text="light"
          border="dark"
          style={{ margin: "25px", padding: "5px", width: "18rem" }}
        >
          <Card.Img variant="top" src={dndLogo} />
          <Card.Body>
            <Card.Title>DnD Character Creator</Card.Title>
            <div className="title-container">
              <a
                className="card-links"
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=js5H6XZfNk8&ab_channel=NickAguirre"
              >
                Demo
              </a>
              <a
                id="card-github-link"
                className="card-links"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/HeyNeek/character-creator"
              >
                GitHub
              </a>
            </div>
            <Card.Text>
              An early project site I built with David Evangelista in React that
              lets you create an account that will let you create Dungeons &
              Dragons characters and lets you view other people's characters!
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Projects;
