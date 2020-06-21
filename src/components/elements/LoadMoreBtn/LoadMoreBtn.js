import React from 'react';


const LoadMoreBtn = (props) =>{
    return(
        <div className="rmdb-loadmorebtn" onClick={props.onClick}>
            <p>{props.text}</p>
        </div>
    )
}

export default LoadMoreBtn