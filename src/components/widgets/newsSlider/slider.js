import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplate from './slider_template';
import { URL } from '../../../config';



export default class NewSlider extends Component {

    state = {
        news: []
    }

    // componentWillMount(){
    //     axios.get(`http://localhost:3004/articles? start=0& end=3`)
    //     .then (response =>{
    //         this.setState({
    //             news:response.data
    //         })


            
    //     });

        
    // }

    componentDidMount(){
      axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
         .then (response =>{
             this.setState({
                 news:response.data
         })


            
       });

    }

  render() {
    //  console.log(this.state.news);
    return (
      <div>
            <SliderTemplate data = {this.state.news} type={this.props.type}>

            </SliderTemplate>
      </div>
    )
  }
}
