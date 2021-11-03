import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import {addMovie} from "../js/action/Action"
const ModalExample = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
 /* const handleChange=(event)=>{
  setValue({...value,[event.target.name]:event.target.value})
}*/
const  onSubmit = e => {
  e.preventDefault();
  
   dispatch(addMovie({name, rating,image }));
  
   setModal(false);
   setName('');
   setRating('');
   setImage('');
};
  return (
    <div>
      <Button className="add-btn" color="danger" onClick={()=>setModal(true)}>+</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <div>
             <div>
                 <label className="input">Name:</label>
                 <input id="name" type="text"name="name" value={name}  onChange={(e) => setName(e.target.value)} />
                 </div>
                 <div>
                 <label className="input">Image:</label>
                 <input id="image" type="text"name="image" value={image} onChange={(e) => setImage(e.target.value)}   />
                 </div>
                 <div>
                 <label className="input">rating:</label>
                 <input id="rating" type="text"name="rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
                 </div>
             </div>
             
   
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={ onSubmit}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;