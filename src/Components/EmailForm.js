import React, { useRef } from 'react';

import emailjs from 'emailjs-com';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';


function EmailForm({setAlertState}){

    const form = useRef();

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'contact', form.current, 'user_apHMj4JYP6G5G9xt7t7Q9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset();
        setAlertState(true);
    }

    return (
        <Form ref={form}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter your email's subject" name="subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email address" name="email" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="5" placeholder="Enter your message here" name="message" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={sendEmail}>
                Submit
            </Button>
        </Form>
    )
}

export default EmailForm;