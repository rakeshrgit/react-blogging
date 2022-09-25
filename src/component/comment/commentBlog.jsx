import React,{useState} from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from 'axios';
// import { useUserAuth } from "../../context/UserAuthContext";

const CommentBlog = () => {
    const navigate = useNavigate();
    const [comment, setComment] = useState({
        name: "",
        email: "",
        description: "",
    });
    function handleInputChange(event) {
        setComment( {...comment, [ event.target.name ]: event.target.value } );
        }
        function handleFormSubmit(e) {
            e.preventDefault();
            const formData = {
                name: comment.creator,
                email: comment.title,
                description: comment.description,
               
                //status: 'publish'
                
            };
            //currentContext.addNewPost(formData);
            axios.patch('http://localhost:4000/api/blogs/632b430b55a29dc9f9913374/commentBlogPost');
        }   

            function disabledAddPost() {
                const infodisable = { ...comment };
                if (infodisable.name === "" || infodisable.description === "") {
                  return true;
                } else {
                  return false;
                }
              }

    return ( 
        <Container>
           <React.Fragment>
        <section className="mt-4">
            <div className="container text-start">
                <h4>Create Post</h4>
                <form onSubmit={ handleFormSubmit }>
                <div className="form-group mb-3">
                        <label>Name</label>
                        <input 
                            className="form-control" 
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Email</label>
                        <input 
                            className="form-control" 
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={ handleInputChange }
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Description</label>
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
        </Container>
     );
}
 
export default CommentBlog;
