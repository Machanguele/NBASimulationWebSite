import React from 'react';
import '../videoLis.css';
import VideoListTemplate from '../videosListTemplate';


const videosRelated = (props) => (
    
    <div className="relatedWrapper">
        <VideoListTemplate
            dados={props.data}
            teams={props.teams}
        />
    </div>
)

export default videosRelated;