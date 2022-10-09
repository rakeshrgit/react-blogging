import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{
    getPosts,
    getsingle,
    createPost,
    deletePost,
    updatePost,
    getcomment
    //deletecomment
    
} from "../services/projects";


const Context = React.createContext();
//var stringify = require("json-stringify-safe");

export class ProjectsContext extends Component {
    state = { 
        posts:[],
        post:[],
        singlepost:[],
        isloading: false,
        pageSize: 4, // for pagination
        currentPage:1
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
     
      handlePageChange = page => {
        this.setState({ currentPage: page });  
        //console.log('page', page) 
      }; 

      getSinglePost = async (id) => {
        await getsingle(id).then(response => {
            if (response.status === 200) {
              const post = response.data;
              this.setState({ post: post });
              //console.log('posts ee',post);
            }
           
          });
      }; 

     

      getSingleComment = async (item) => {
        // console.log('onUpdatePost', id)
       //  const posts = this.state.posts;
          //console.log('item', item)
         // this.setState({isloading: true }); 
          try {
             await getcomment(item).then(response => {
             
               if (response.status === 200) {
                const post = response.data;
                this.setState({ post: post });
                 //console.log('posts ee',post);
                 toast.success("Post Updated!");
                 
               } else {
                 //this.setState({isloading: false }); 
                 toast.error("Post not Updated!");
               }

             });
             
           } catch (err) {this.setState({isloading: false }); }
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
                //console.log('run toast')
                toast.success('post deleted')
                //console.log('run toast')
              } else {
                //console.log('post not deleted')
              }
            });
          } catch (err) {}
      }; 

      // onDeleteComment = async (commnetParentId, id) => {
      //   //const posts = this.state.posts;
      //     try {
      //       await deletecomment(commnetParentId, id).then(response => {
      //         console.log('response', response)
      //         if (response.status) {
                
      //         } else {
      //           //console.log('post not deleted')
      //         }
      //       });
      //     } catch (err) {}
      // };


      onUpdatePost = async (item) => {
        // console.log('onUpdatePost', id)
       //  const posts = this.state.posts;
          //console.log('item', item)
         // this.setState({isloading: true }); 
          try {
             await updatePost(item).then(response => {
             
               if (response.status) {
                 this.setState({isloading: false }); 
                 this.getAllPosts();
                 toast.success("Post Updated!");
               } else {
                 this.setState({isloading: false }); 
                 toast.error("Post not Updated!");
               }
             });
           } catch (err) {this.setState({isloading: false }); }
       };



    render() { 
      
        return ( 
            <Context.Provider
            
                value={{ 
                    ...this.state,
                    getAllPosts: this.getAllPosts,
                    addNewPost:this.addNewPost,
                    onDeletePost: this.onDeletePost,
                    onUpdatePost: this.onUpdatePost,
                    getSinglePost:this.getSinglePost,
                    getSingleComment:this.getSingleComment,
                    handlePageChange: this.handlePageChange
                    //onDeleteComment: this.onDeleteComment,
                }}
                
            >
                
                {this.props.children}
                <ToastContainer /> 
            </Context.Provider>
         );
    }
}

export default Context;
