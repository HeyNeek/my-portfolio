import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import spaceCityLogo from '../spacecitylogo.jpg';
import dndLogo from '../DungeonsAndDragons.jpeg';

function Projects(){
    return (
        <Container id="projectsContainer">
            <h1 id="projectsH1">My Projects</h1>
            <br/>
            <Row id="projectsRow">
                <Card className="projectCards" bg="dark" text="light" border="dark" style={{ margin: '25px', padding: '5px', width: '18rem' }}>
                    <Card.Img variant="top" src={spaceCityLogo} />
                    <Card.Body>
                        <Card.Title><a className="cardLinks" target="_blank" href="https://space-city-coffee.herokuapp.com/">Space City Coffee</a></Card.Title>
                        <Card.Text>
                        A site I built that lets you browse through Houston's local coffee shops, create an account, and leave reviews!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="projectCards" bg="dark" text="light" border="dark" style={{ padding: '5px', width: '18rem' }}>
                    <Card.Img variant="top" src={dndLogo} />
                    <Card.Body>
                        <Card.Title><a className="cardLinks" target="_blank" href="https://fi-p4-character-creator.herokuapp.com/">DnD Character Creator</a></Card.Title>
                        <Card.Text>
                        A site I built with David Evangelista that lets you create an account that will let you create Dungeons & Dragons characters and 
                        lets you view other people's characters!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Projects;