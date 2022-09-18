import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{
    getPosts,
    createPost,
    deletePost
    
} from "../services/projects";


const Context = React.createContext();
//var stringify = require("json-stringify-safe");

export class ProjectsContext extends Component {
    state = { 
        posts:[]
        
     };
  
   


     getAllPosts = async () => {
        await getPosts().then(response => {
            if (response.status === 200) {
              const posts = response.data;
              this.setState({ posts: posts });
              //console.log('posts ee',posts);
            }
           
          });
      }; 
     
      addNewPost = async item => {
        try {
          await createPost(JSON.stringify(item)).then(response => {
           // console.log("addNewPost: ", response);
            if (response.status) {
              this.getAllPosts();
             
            } else {
            
            }
          });
        } catch (err) {
          //console.log('add new post error', err.response);
          const {status} = err.response || {} ;
          if(status === 403){
           
          }else if(status >= 500){
           
          }else{
           
          }
        }
      };  

      onDeletePost = async (id) => {
        
        const posts = this.state.posts;
          
          try {
            await deletePost(id).then(response => {
              console.log('response', response)
              if (response.status) {
                let post = posts.filter(item => item.id !== id);
                this.setState({ posts: post });
                this.getAllPosts();
                console.log('run toast')
                toast.success('post deleted')
                console.log('run toast')
              } else {
                //console.log('post not deleted')
              }
            });
          } catch (err) {}
      }; 
    render() { 
      
        return ( 
            <Context.Provider
            
                value={{ 
                    ...this.state,
                    getAllPosts: this.getAllPosts,
                    addNewPost:this.addNewPost,
                    onDeletePost: this.onDeletePost
                }}
                
            >
                
                {this.props.children}
                <ToastContainer /> 
            </Context.Provider>
         );
    }
}

export default Context;
