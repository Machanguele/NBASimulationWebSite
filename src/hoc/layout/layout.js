import React, { Component } from 'react'

//css
import './layout.css';

import Header from  '../../components/header/header';
import Footer from '../../components/footer/footer';


class Layout extends Component {
    state = {
        showNav: false

    }

    toogleSidenav = (action) =>{
        this.setState({
            showNav:action
        })
    }

    render() {
        return (
            <div>
              
                <Header
                    user ={this.props.user}
                    showNav = {this.state.showNav}
                    onHideNav =  { () => this.toogleSidenav(false) }
                    onOpenNav =  {()=> this.toogleSidenav(true)}
                />
              
               {this.props.children}
              
                <Footer />
            </div>
        )
    }
}
export default  Layout
