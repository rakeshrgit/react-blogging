import React, { Component } from 'react';
import ProjectsContext from '../../context/projectsContext';
class Dashboard extends Component {
    state = {  } 
    static contextType = ProjectsContext; 

    componentDidMount() {
      
        this.context.getAllPosts();
        
      }
    render() { 
        
        return (
            <div>
                <div className="container">
                        <table className="table w-100">
                            <tbody>
                            {this.context.posts.map(post=>(
                                <tr key={post._id}>
                                    <td>{post.title}</td>        
                                    <td>{post.description}</td>

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