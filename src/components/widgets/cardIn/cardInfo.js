import React from 'react';
import FontAwesome from 'react-fontawesome';

import './cardInfo.css';





    const CardInfo = (props) =>{
        // console.log(props.team);

        const teamName = (teams, team) =>{
            let data = teams.find((item)=>{
                return item.id === team
            });
            if(data){
                return data.name;

            }
        }

        return (
            <div className = "cardInfo">
                <span className = "teamName">
                {/* Cavaliers */}
                {teamName(props.teams, props.team)}

                </span>

                <span className="date">
                    <FontAwesome name="clock-o" />
                    {/* 04/06 */}
                    {props.date}
                </span>
            </div>
        )
     }
     export default CardInfo;
