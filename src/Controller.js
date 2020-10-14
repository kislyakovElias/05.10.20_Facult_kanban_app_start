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
            <ModalHeader toggle={toggle}>Fill the form <span>🏝️</span></ModalHeader>
            <ModalBody>
                <Label >Name: </Label>{' '}
                <Input type="text" placeholder="input Name here" value={nameInput} onChange={event => setNameInput(event.target.value)} />
                <Label >Status: </Label>{' '}
                <Input type="select" value={statusInput} onChange={event => setStatusInput(event.target.value)}>
                    <option value='todo'>To do</option>
                    <option value='progress'>In progress</option>
                    <option  defaultValue='review' value='review'>Review</option>
                    {/*selected={true}*/}
                    <option value='done'>Done</option>
                    </Input>


            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={createButtonHandler}>Create new task <span>🐶</span></Button>{' '}
                <Button color="secondary" onClick={toggle}> <span>🐍</span> Cancel</Button>
            </ModalFooter>
        </Modal>

     </div>
  );
}

export default Controller;
