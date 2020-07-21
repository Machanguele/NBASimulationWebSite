import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';
import FontAwesome from 'react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import '../../fontawesome-free-5.13.0-web/css/all.min.css';


    const SideNavItems = ()  =>{

        const  items = [{
            type: 'option',
            icon: 'home',
            text: 'Home',
            link: '/'

        },
            {type: 'option',
            icon: 'rocket',
            text: 'Newspaper',
            link: '/news'
        },
        {
            type: 'option',
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        
        },
        {
            type: 'option',
            icon: 'address-book',
            text: 'Sign in',
            link: '/signIn'
        
        },
           { type: 'option',
            icon: 'allergies',
            text: 'Sign out',
            link: '/'
        
        }
        
    ]

    const showItems = () =>{
        return items.map((item, i) =>{
            return(
                <div  key={i} className={item.type}> 
                    <Link to={item.link}>
                       <FontAwesome name= {item.icon} />
                       {item.text}
                    </Link>
                </div>

            )
        });
    }


        return (
           
                // <div className="option"> 
                //     <Link to="/">
                //         <FontAwesome name='home'/>Home
                //     </Link>
                // </div>

              <div>
                  {showItems()}
              </div>
                
            
            
        )
    }
export default SideNavItems;
