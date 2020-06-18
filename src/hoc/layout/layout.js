import React, { Component } from 'react'

//css
import './layout.css';

export default class Layout extends Component {
    state = {

    }

    render() {
        return (
            <div>
                Header
                {this.props.children}
                Footer
            </div>
        )
    }
}
