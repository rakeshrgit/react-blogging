import React, { Component } from 'react';
class SingleBlog extends Component {
    state = {  } 
   
   
    render() { 
       
        console.log('props', this.props)
        return (
            <div>{this.props.title}</div>
        );
    }
}
 
export default SingleBlog;