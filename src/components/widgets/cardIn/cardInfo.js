import React from 'react';
import FontAwesome from 'react-fontawesome';

import './cardInfo.css';





    const CardInfo = (props) =>{
        // console.log(props.team);


        const teamName = (teams, team) =>{
            let item = teams.find((item)=>{
        //    return item.id === team
                
            return item.teamId === 0
            });
            console.log(teams)
            let data = item.name;
            
            
            if(data){
                return data;

            }
            // console.log("Nome: "+data)
        }

        return (
            <div className = "cardInfo">
                <span className = "teamName">
                {/* Cavaliers */}
                {/* {teamName(props.teams, props.team)}  */}
                Cavaliers
                

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
