import React, { useState, useContext, useEffect } from 'react';
import {Modal, Button, } from "react-bootstrap";
import JoditEditor from "jodit-react";
const EditPostNew = (props) => {
   // console.log('props', props)
    const [blogInfo, setBlogInfo] = useState({
        title: '',
        description:''
      });
    
    useEffect( () => {
        setBlogInfo({ 
            title: props.title, 
            description:props.description, 
            id:props.id
        });
    }, [props.title, props.description])

    const titleHandler = (event) => {
        //console.log('event', event)
        setBlogInfo( {...blogInfo, [ event.target.name ]: event.target.value } );
    }

    const contentHandler = (description) => {
        
        setBlogInfo( {...blogInfo, description } );
    
    }

   const handleMClose = () =>{
        props.closeModalDetails()
   } 

   const handleSave = () => {
    const item = blogInfo;
    props.saveModalDetails(item)
   // console.log('item Name', item)
}

    return ( 
        <div>
        
        <Modal
        show ={props.show}
       
    >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit List Data  
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="form-section">
                <div className="form-data"><span className="modal-lable">Title:</span> 
                <input 
                    type="text"
                    name="title"
                    value={blogInfo.title || '' } 
                    onChange={titleHandler}
                />
            </div>
                {/* <div className="form-data"><span className="modal-lable">Content:</span><textarea   value={this.state.content} onChange={(e) => this.contentHandler(e)}></textarea></div> */}
            </div>
            <div>
                <JoditEditor 
                    value={blogInfo.description}
                    onBlur={(description) => contentHandler(description)}
                />
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleMClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
                Save Changes
            </Button>
            </Modal.Footer>    
    </Modal>
    </div>
     );
}
 
export default EditPostNew;