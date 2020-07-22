import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplate from './slider_template';
import { URL } from '../../../config';
import {firebaseArticles, firebaseLooper} from '../../../firebase';



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
      // axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
      //    .then (response =>{
      //        this.setState({
      //            news:response.data
      //    })


            
      //  });
      firebaseArticles.limitToFirst(3).once('value')
      .then((snapshot)=>{

      //   const dados = [];
      //   snapshot.forEach((childSnapshot)=>{
      //     dados.push({
      //       ...childSnapshot.val(),
      //       id:childSnapshot.key
      //     })
      //   });
      //   this.setState({
      //     news: dados
      //   })
      // })

        const news = firebaseLooper(snapshot)
     
            // console.log(valores.val())
        //     const dados=[];
        //     snapshot.forEach(item =>{
        //         // this.state.data.push(item.val())
        //         dados.push({
        //           ...item.val(), 
        //           id:item.key
        //     })

        // });
        this.setState({
          news
        })
    
      })
    }
    

    requisicao = () =>{
      //getData Nao eh realTime
      firebaseArticles.once('value')
      .then((snapshot)=>{
        console.log(snapshot.val())
      })
      .catch((e)=>{
          console.log(e)
 })
    }

  render() {
    //  console.log(this.state);
    return (
      <div>
            <SliderTemplate data = {this.state.news} type={this.props.type}>

            </SliderTemplate>
      </div>
    )
  }
}
