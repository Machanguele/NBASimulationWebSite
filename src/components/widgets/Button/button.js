import React from 'react';
import {Link } from 'react-router-dom';

import './Button.css';


const Button = (props)=>{
    let template = null;
    
    // console.log(props.type);
    switch(props.type){
        case 'loadMore':
            template = (
                <div className="blue_btn"
                 onClick={props.loadMore}
                >
                {props.cta}
                </div>
            )
             break;
             
        case 'LinkTo':
            template = (
                <Link to={props.linkTo}
                className='blue_btn' >
                {props.cta}

                </Link>
            )
            break;

        default:
            template = "2";
    }
    return template;

    

}
export default Button;
       

