import React, { Component } from "react";
import{
    getPosts,
    createPost
    
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
              console.log('posts ee',posts);
            }
           
          });
      }; 



     

      
     
      addNewPost = async item => {
        try {
          await createPost(JSON.stringify(item)).then(response => {
            console.log("addNewPost: ", response);
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
    render() { 
      
        return ( 
            <Context.Provider
            
                value={{ 
                    ...this.state,
                    getAllPosts: this.getAllPosts,
                    addNewPost:this.addNewPost,
                }}
                
            >
                
                {this.props.children}

            </Context.Provider>
         );
    }
}

export default Context;
