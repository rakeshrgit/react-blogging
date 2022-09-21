import React, { Component } from 'react';
import {Modal, Button, } from "react-bootstrap";
import JoditEditor from "jodit-react";
class EditPost extends Component {
    state = { 
        // id:'',
        // title: '',
        // description:''
     } 
     componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.title,
            description:nextProps.description,
            id:nextProps.id
        });
        //console.log('nextProps', nextProps)
    }
    titleHandler(e) {
        this.setState({ title: e.target.value,  });
    }
    contentHandler(description) {
        this.setState({description});
    }
     handleSave = () => {
        const item = this.state;
        this.props.saveModalDetails(item)
        //console.log('item Name', item)
    }
    handleClose = () => {
        //const item = this.state;
        this.props.closeModalDetails()
        //console.log('item Name', item)
    }
    render() { 
        return (
            <Modal
            show ={this.props.show}
            
        >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit List Data  
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="form-section">
                    <div className="form-data"><span className="modal-lable">Title:</span> <input value={this.state.title} onChange={(e) => this.titleHandler(e)}/></div>
                    {/* <div className="form-data"><span className="modal-lable">Content:</span><textarea   value={this.state.content} onChange={(e) => this.contentHandler(e)}></textarea></div> */}
                </div>
                <div>
                    <JoditEditor 
                        value={this.state.description}
                        onBlur={(description) => this.contentHandler(description)}
                    />
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => { this.handleClose() }}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => { this.handleSave() }}>
                    Save Changes
                </Button>
                </Modal.Footer>    
        </Modal>
        );
    }
}
 
export default EditPost;