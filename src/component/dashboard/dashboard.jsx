import React, { Component } from 'react';
import ProjectsContext from '../../context/projectsContext';
import CreateNewPostFn from './../createpost/createNewpostFn';
class Dashboard extends Component {
    state = { 
        postid: null
     } 
    static contextType = ProjectsContext; 

    componentDidMount() {
      
        this.context.getAllPosts();
        
    }
    handleDelete = async id => {
        //console.log('id', id)
        await this.setState({ postid: id });  
         this.context.onDeletePost(this.state.postid);  
    }; 
    render() { 
        
        return (
            <div>
                <div className="container text-start">
                        <table className="table w-100">
                            <tbody>
                            {this.context.posts.map(post=>(
                                <tr key={post._id}>
                                    <td>{post.title}</td>        
                                    <td>{post.description}</td>
                                    <td>{post.creator}</td>
                                    <td>
                                         {post.fileUpload ? <img src={post.fileUpload} height="200px" width="200px" alt="Post" />: 'no image'}
                                    </td>
                                    <td><button  className="btn btn-danger btn-sm" onClick={() => this.handleDelete(post._id)}>Delete</button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                </div>
                
            </div>
        );
    }
}
 
export default Dashboard;