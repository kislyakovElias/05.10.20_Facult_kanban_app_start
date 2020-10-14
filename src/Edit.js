import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';


function Edit(props) {


    const [editMode, setEditMode] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const [statusInput, setStatusInput] = useState('todo');

    const editButtonHandler = () => {
        props.editTask(props.task.id, nameInput, statusInput);
        setEditMode(false)
        setNameInput('')
        setStatusInput('todo')
    }


    const toggle = () => setEditMode(!editMode);


  return (
    <div >
        <Button color="info" onClick={toggle}>Edit ↝</Button>
        <Modal isOpen={editMode} toggle={toggle} >
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <Label >Name: </Label>{' '}
                <Input type="text" value={props.val} placeholder="input Name here"  onChange={event => setNameInput(event.target.value)}  />
                <Label >Status: </Label>{' '}
                <Input type="select" value={statusInput} onChange={event => setStatusInput(event.target.value)}>
                    <option value='todo'>To do</option>
                    <option value='progress'>In progress</option>
                    <option selected='true' value='review'>Review</option>
                    <option value='done'>Done</option>
                    </Input>


            </ModalBody>
            <ModalFooter>
                <Button color="info" onClick={editButtonHandler}>Edit <span>🐄</span></Button>{' '}
                <Button color="warning" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>

     </div>
  );
}

export default Edit;
