import React, {useState} from 'react';

import FormModal from './FormModal';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact(){

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Container>
                <Row>
                    <Col xs="3">
                        <FontAwesomeIcon icon={faLinkedin} id="linkedInIcon" />
                        <br/>
                        <a target="_blank" href="https://www.linkedin.com/in/nicholas-aguirre-a23a0616a/" className="iconSubtitle">LinkedIn</a>
                    </Col>
                    <Col xs="3">
                        <FontAwesomeIcon icon={faGithub} id="githubIcon" />
                        <br/>
                        <a target="_blank" href="https://github.com/HeyNeek" className="iconSubtitle">GitHub</a>
                    </Col>
                    <Col xs="3">
                        <FontAwesomeIcon icon={faEnvelope} id="emailIcon" />
                        <br/>
                        <p onClick={() => setModalShow(true)} className="iconSubtitle">Email</p>
                    </Col>
                </Row>
            </Container>
            <FormModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default Contact;