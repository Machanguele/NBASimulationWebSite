import React, { Component } from 'react'
import './videoLis.css';
import axios from 'axios';

import {URL} from '../../../config';
import Button from '../Button/button';
import VideosListTemplate from './videosListTemplate';
import SliderTemplate from '../newsSlider/slider_template'

export default class VideosList extends Component {

    state = {
        teams : [],
        videos: [],
        start: this.props.start,
        amount: this.props.amount,
        end: this.props.start + this.props.amount



    }

    componentDidMount(){
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) =>{
        if(this.state.teams.length <1){
            axios.get(`${URL}/teams`)
            .then(response =>{
                this.setState({
                    teams: response.data
                })
            })
        }
        axios.get(`${URL}/videos?=${start}&_end=${end}`)
        .then(response =>{
            this.setState({ videos: response.data
                // videos: {...this.state.videos, ...response.data}
            })
        })
    }



    loadMore = () =>{
        let end = this.state.end+ this.state.amount;
        this.request(this.state.end, end);

    }

    renderVideos = () =>{
        let template =null;

        switch(this.props.type){
            case ('card'):
                template = <VideosListTemplate  dados={this.state.videos}
                        teams={this.state.teams}
                        type={2}
                    />
                break;
            default:
                template = 5;

        }
        return template;
        
    } 

    renderTitle = () =>{
        return this.props.title ? 
        <h2><strong> NBA </strong>videos</h2>
        : null

    }

    renderButton = () =>{
        return this.props.loadmore ? 
            <Button
                type="loadMore"
                loadMore = {()=>this.loadMore()}
                cta="load More Videos"
            />
        :
      
           <Button 
                type="LinkTo" 
                cta="More Videos" 
                linkTo="/videos" 

           />

        
    }
    render() {
        // console.log(this.state.videos)
        return (
            <div className = "videoList_wrapper">
               {this.renderTitle()}
               {this.renderVideos()}
               {this.renderButton()}
            </div>
        )
    }
}
