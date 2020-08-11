import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = ({add}) => {
  
 const[value,setValue]= useState({})
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  const handleChange=(event)=>{
  setValue({...value,[event.target.name]:event.target.value})
}
const  onSubmit = e => {
  e.preventDefault();
   setModal(false)
  add(Date.now(),value.name,value.image,value.rating);
 setValue("") 
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
                 <input id="name" type="text"name="name" onChange={handleChange}  />
                 </div>
                 <div>
                 <label className="input">Image:</label>
                 <input id="image" type="text"name="image"onChange={handleChange}  />
                 </div>
                 <div>
                 <label className="input">rating:</label>
                 <input id="rating" type="text"name="rating"onChange={handleChange}/>
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