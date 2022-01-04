import React, {useState} from "react";

import EmailForm from "./EmailForm";

import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.css';

function FormModal(props){

    const [alertState, setAlertState] = useState(false);

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Send me an email!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EmailForm setAlertState={setAlertState} />
                {alertState ? <><br/><Alert variant="success" onClose={() => setAlertState(false)} dismissible><Alert.Heading>Email sent!</Alert.Heading></Alert></> : null}
            </Modal.Body>
        </Modal>
    )
}

export default FormModal;