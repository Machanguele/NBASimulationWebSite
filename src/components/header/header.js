import React  from 'react'
import './header.css';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import '../../fontawesome-free-5.13.0-web/css/all.min.css';
import SideNavg from '../header/sideNav'

const Header = (props)=> {

        const logo = () =>{
            return(
                    <Link to="/" className="logo">
                    <img alt="nba logo" src="/images/nba_logo.png" />
             </Link>) ;
                
            
        }

        const navBar =()=>(
            <div className="">
                <FontAwesome name="bars" 
                    onClick = {props.onOpenNav} 
                    style={{ 
                       color: 'white',
                        padding: '10px',
                        cursor: 'pointer',
                        size: '10em'
                     }}
                />
               
            </div>
        );


        return (

            
            <header  className='header'>
                <SideNavg {...props} />

                <div className='headerOpt'>
                {navBar()}
                {logo()}
                </div>
            </header>
        )
    }
    export default Header;
