import React, { useState, useContext   } from 'react';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import FileBase from "react-file-base64";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProjectsContext from '../../context/projectsContext';
const CreateNewPostFn = () => {
    
    const [blogInfo, setBlogInfo] = useState({
       title: "",
        description: "",
       
      });
      function handleInputChange(event) {
        setBlogInfo( {...blogInfo, [ event.target.name ]: event.target.value } );
        }
        function handleFormSubmit(e) {
            e.preventDefault();
            const formData = {
                title: useState.title,
                description: useState.description,
                //status: 'publish'
                
            };
        }   

            function disabledAddPost() {
                const infodisable = { ...blogInfo };
                if (infodisable.title === "" || infodisable.description === "") {
                  return true;
                } else {
                  return false;
                }
              }
    return ( 
        <React.Fragment>
        <section className="mt-4">
            <div className="container text-start">
                <h4>Create Post</h4>
                <form onSubmit={ handleFormSubmit }>
                    <div className="form-group mb-3">
                        <label>Title</label>
                        <input 
                            className="form-control" 
                            type="text"
                            name="title"
                            placeholder="Post Title"
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Content</label>
                        <textarea 
                            className="form-control"
                            placeholder="Project Description"
                            name="description"
                            onChange={handleInputChange }
                        ></textarea>
                    </div>
                    <div className="text-right mb-4">
                    <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    //onClick={e => this.addPost(e)}
                    disabled={disabledAddPost()}
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
 
export default CreateNewPostFn;