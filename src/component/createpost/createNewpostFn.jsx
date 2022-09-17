import React, { useState, useContext   } from 'react';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import FileBase from "react-file-base64";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProjectsContext from '../../context/projectsContext';
const CreateNewPostFn = () => {
    const currentContext = useContext(ProjectsContext)
    const navigate = useNavigate();
    const [blogInfo, setBlogInfo] = useState({
        creator: "",
        title: "",
        description: "",
        tags: "",
        fileUpload: "",
      });
      function handleInputChange(event) {
        setBlogInfo( {...blogInfo, [ event.target.name ]: event.target.value } );
        }
        function handleFormSubmit(e) {
            e.preventDefault();
            const formData = {
                creator: blogInfo.creator,
                title: blogInfo.title,
                description: blogInfo.description,
                fileUpload:  blogInfo.fileUpload  
                //status: 'publish'
                
            };
            currentContext.addNewPost(formData);
            navigate('/')
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
                        <label>Creator</label>
                        <input 
                            className="form-control" 
                            type="text"
                            name="creator"
                            placeholder="Creator"
                            onChange={ handleInputChange }
                        />
                    </div>
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
                    <div className="form-group mb-3">
                        <label>Upload Data</label>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) =>
                            setBlogInfo({ ...blogInfo, fileUpload: base64 })
                            }
                        />
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