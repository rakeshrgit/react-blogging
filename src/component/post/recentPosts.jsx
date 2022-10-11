import React from 'react';

const ReceecentPosts = (props) => {
    //console.log('props', props)
    return (
        <React.Fragment>
            <div className="d-flex w-100 mb-4 s-recent">
                <div className="r-p-img">
                    {props.pimg ? <img src={props.pimg} alt="Post" />: 'No Image Available'}
                </div>
                <div className="d-flex flex-column d-title">
                    <h6 className="text-start">{props.title}</h6>
                    <div className="text-start r-date">{props.dateCreated}</div>
                </div>    
            </div>
        </React.Fragment>
    );
}

export default ReceecentPosts;