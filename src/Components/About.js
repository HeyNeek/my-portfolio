import React from 'react';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';

function About(){
    return (
        <Container>
                <h1 className="aboutText">Meet Nicholas Aguirre, Software Engineer extraordinaire!</h1>
                <p className="aboutText">
                    I am a 3rd generation Mexican-American that was born and raised in the Houston area, to a family of ten children(second eldest). 
                    I love video games, non-fiction books, movies, all types of music, tortas, dumplings, and ANY sort of pasta.
                    Being the second eldest of ten children taught me a lot about responsibility, leadership, and working with different
                    types of personalities!
                </p>
                <br/>
                <p className="aboutText">
                    I got my start with computers in the early 2000s troubleshooting and playing around in Windows XP. This continued love for computers 
                    led to me taking coding classes in High School and going to college for Computer Science. After that I continued my self education 
                    through online resources and eventually enrolled in Flatiron School, an intensive 3 month bootcamp that would teach me the skills to 
                    apply my fundamental knowledge gained through my formal education and apply it in a practical sense!
                </p>
        </Container>
    )
}

export default About;