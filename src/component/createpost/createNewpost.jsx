import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import ProjectsContext from '../../context/projectsContext';

class CreateNewPost extends Component {
    state = { 
        title: '',
        description: ''
       
     }
     static contextType = ProjectsContext; 
    disabledAddPost() {
        const infodisable = { ...this.state };
        if (infodisable.title === "" || infodisable.description === "") {
          return true;
        } else {
          return false;
        }
      }
     handleInputChange = ( event ) => {
        this.setState( { [ event.target.name ]: event.target.value } );
    };
    handleFormSubmit = e => {
        e.preventDefault();
       // const deleteFiles = [...this.state.deleteFiles];
       const formData = {
        title: this.state.title,
        description: this.state.description,
        //status: 'publish'
        
    };
        this.context.addNewPost(formData);
       
        
      };

    render() { 
        return ( 
            <React.Fragment>
                <section className="mt-4">
                    <div className="container text-start">
                        <h4>Create Post</h4>
                        <form onSubmit={ this.handleFormSubmit }>
                            <div className="form-group mb-3">
                                <label>Title</label>
                                <input 
                                    className="form-control" 
                                    type="text"
                                    name="title"
                                    placeholder="Post Title"
                                    onChange={ this.handleInputChange }
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label>Content</label>
                                <textarea 
                                    className="form-control"
                                    placeholder="Project Description"
                                    name="description"
                                    onChange={ this.handleInputChange }
                                ></textarea>
                            </div>
                            <div className="text-right mb-4">
                            <Button
                            variant="primary"
                            size="lg"
                            type="submit"
                            //onClick={e => this.addPost(e)}
                            disabled={this.disabledAddPost()}
                            >
                            Submit
                            </Button>
                        </div>
                        </form>


                    </div>
                </section>
            </React.Fragment>
         );
    }
}
 
export default CreateNewPost;