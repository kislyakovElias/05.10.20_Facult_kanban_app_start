import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';


function Controller(props) {


    const [modal, setModal] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const [statusInput, setStatusInput] = useState('todo');

    const createButtonHandler = () => {
        props.createTask(nameInput, statusInput);
        setModal(false)
        setNameInput('')
        setStatusInput('')
    }


        const toggle = () => setModal(!modal);


  return (
    <div >
        <Button color="danger" onClick={toggle}>Task Add </Button>
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Fill the form 🏝️</ModalHeader>
            <ModalBody>
                <Label >Name: </Label>{' '}
                <Input type="text" placeholder="input Name here" value={nameInput} onChange={event => setNameInput(event.target.value)} />
                <Label >Status: </Label>{' '}
                <Input type="select" value={statusInput} onChange={event => setStatusInput(event.target.value)}>
                    <option value='todo'>To do</option>
                    <option value='progress'>In progress</option>
                    <option selected='true' value='review'>Review</option>
                    <option value='done'>Done</option>
                    </Input>


            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={createButtonHandler}>Create new task 🐶</Button>{' '}
                <Button color="secondary" onClick={toggle}> 🐍 Cancel</Button>
            </ModalFooter>
        </Modal>

     </div>
  );
}

export default Controller;
