import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNavItems';

const SideNavg= (props) => {

    return (
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle = {{
                    
                    background:'#242424',
                    padding: 0,
                    color: 'white',
                    font: '12pt'

                   
                    
                }}

            >
                <SideNavItems />
            </SideNav>
        </div>
    )
            
  }
  export default SideNavg;
