import React from 'react';
import { Link } from  'react-router-dom';
import './footer.css';

const Footer = ()  =>{
       
            return(
                <div className="footer" >
                <Link to="/" className="logo">
                <img alt="nba logo" src="/images/nba_logo.png" />

                </Link>

                <div className="right">
                    @NBA { (new Date()).getFullYear() } ALL RIGHTS RESERVED.
                </div>
             </div>
            );
           
       
    }


export default Footer;