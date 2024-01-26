import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import spaceCityLogo from "../spacecitylogo.jpg";
import dndLogo from "../DungeonsAndDragons.jpeg";

function Projects() {
  return (
    <Container id="projectsContainer">
      <h1 className="projectsH1">My Projects</h1>
      <p className="projects-subheader">
        (Note: Because Heroku ended the free tier projects I am linking the
        github repos and the YouTube demo links for some of the projects! :D)
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
              A site I built that lets you browse through Houston's local coffee
              shops, create an account, and leave reviews!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className="projectCards"
          bg="dark"
          text="light"
          border="dark"
          style={{ padding: "5px", width: "18rem" }}
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
              A site I built with David Evangelista that lets you create an
              account that will let you create Dungeons & Dragons characters and
              lets you view other people's characters!
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Projects;
