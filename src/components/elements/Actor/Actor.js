import React from 'react';
import {IMAGE_BASE_URL} from '../../../config';

const Actor = (props) =>{
    const poster_size = "w154";
    return(
        <div className="rmdb-actor">
            <img src={props.actor.profile_path ? `${IMAGE_BASE_URL}${poster_size}/${props.actor.profile_path}`: '/images/no_image.jpg' } alt="actorsthumb" />
            <span className="rmdb-actor-name">{props.actor.name}</span>
            <span className="rmdb-actor-character">{props.actor.character}</span>
        </div>
    )
}

export default Actor