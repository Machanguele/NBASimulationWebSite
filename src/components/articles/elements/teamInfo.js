import React from 'react';
import '../articles.css';

const TeamInfo = (props) =>(
    <div className="articleTeamHeader">
        <div className="left"
            style = {{ 
                // background:`url('/images/teams/${props.team.logo})`
                background:`url('/images/teams/${props.team.logo}')`
             }}
        >
            {/* <img src="/images/teams/nets.png"  alt="images"/> */}
        </div>      
        <div className="right">
             <div>
                 <span>{props.team.city} {props.team.name}</span>
             </div>

             <div>

                <strong>
                W{props.team.stats[0].wins}-{props.team.stats[0].defeats}
                </strong>
             </div>

        </div>  
    
    </div>
)
export default TeamInfo;