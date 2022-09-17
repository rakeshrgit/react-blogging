import React, { Component } from 'react';
import ProjectsContext from '../../context/projectsContext';
import CreateNewPostFn from './../createpost/createNewpostFn';
class Dashboard extends Component {
    state = {  } 
    static contextType = ProjectsContext; 

    componentDidMount() {
      
        this.context.getAllPosts();
        
      }
    render() { 
        
        return (
            <div>
                <div className="container text-start">
                        <table className="table w-100">
                            <tbody>
                            {this.context.posts.map(post=>(
                                <tr key={post._id}>
                                    <td>{post.title}</td>        
                                    <td>
                                    {post.description.length > 20 ?
                                    `${post.description.substring(0, 20)}...` : post.description
  }
                                       </td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                </div>
                {/* <CreateNewPostFn/> */}
            </div>
        );
    }
}
 
export default Dashboard;