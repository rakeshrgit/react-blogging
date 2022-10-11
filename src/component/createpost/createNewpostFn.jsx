import React, { useState, useContext, useEffect   } from 'react';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import FileBase from "react-file-base64";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProjectsContext from '../../context/projectsContext';
import ReceecentPosts from './../post/recentPosts';
const CreateNewPostFn = () => {
    const currentContext = useContext(ProjectsContext)
    useEffect( () => {
        currentContext.getAllPosts()
    }, [])
    const {posts} = currentContext;
    
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
                <div className="row">
                    <div className="col-md-9">
                        <div className="left-sectoion pe-3">
                            <div className="page-bg form-post">
                                <h1 className="text-uppercase">Create Post</h1>
                                <form onSubmit={ handleFormSubmit }>
                                    <div className="form-group mb-3">
                                        <label>Creator</label>
                                        <input 
                                            className="form-control" 
                                            type="text"
                                            name="creator"
                                            placeholder="Creator"
                                            value={blogInfo.creator}
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
                                            value={blogInfo.title}
                                            onChange={ handleInputChange }
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Content</label>
                                        <textarea 
                                            className="form-control"
                                            placeholder="Project Description"
                                            name="description"
                                            value={blogInfo.description}
                                            onChange={handleInputChange }
                                        ></textarea>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Upload Data</label>
                                        <div className="uploadFile">
                                            <FileBase
                                                type="file"
                                                multiple={false}
                                                onDone={({ base64 }) =>
                                                setBlogInfo({ ...blogInfo, fileUpload: base64 })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="text-end mt-5 form-btn">
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
                        </div>                        
                    </div>    
                    <div className="col-md-3">
                        <div className="r-post-main">                                            
                            <h5 className="text-center"><span>MUST-READ ARTICLES</span></h5>                            
                            {posts.slice(0, 3)?.map(item=>(
                                <ReceecentPosts 
                                    key={item._id}
                                    title={item.title}
                                    pimg={item.fileUpload}
                                    dateCreated={item.createdAt}
                                />
                            ))}                                
                        </div>    
                    </div>                
                </div>            
            </div>
        </section>
    </React.Fragment>
     );
}
 
export default CreateNewPostFn;