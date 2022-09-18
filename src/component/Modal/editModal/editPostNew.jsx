import React, { useState, useContext, useEffect } from 'react';
import {Modal, Button, } from "react-bootstrap";
import JoditEditor from "jodit-react";
const EditPostNew = (props) => {
   // console.log('props', props)
    const [blogInfo, setBlogInfo] = useState({
        title: '',
        description:''
      });
    //   componentWillReceiveProps(nextProps) {
    //     useState({
    //         title: nextProps.title,
    //         description:nextProps.description,
           
    //     });
    // }
    

    // useEffect((props) => {
    //     console.log('Prop Received: ', props);
    // })
    const titleHandler = (event) => {
        setBlogInfo( { title: event.target.value, } );
    }
    
   const handleMClose = () =>{
        props.closeModalDetails()
   } 

   const handleSave = () => {
    const item = blogInfo;
    props.saveModalDetails(item)
    console.log('item Name', item)
}

    return ( 
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
                <div className="form-data"><span className="modal-lable">Title:</span> <input value={blogInfo.title} onChange={titleHandler}/></div>
                {/* <div className="form-data"><span className="modal-lable">Content:</span><textarea   value={this.state.content} onChange={(e) => this.contentHandler(e)}></textarea></div> */}
            </div>
            {/* <div>
                <JoditEditor 
                    value={this.state.description}
                    onBlur={(description) => this.contentHandler(description)}
                />
            </div> */}
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
     );
}
 
export default EditPostNew;