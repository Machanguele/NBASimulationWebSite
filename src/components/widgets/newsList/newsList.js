import React, { Component } from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Link} from 'react-router-dom';
// import axios from 'axios';

import './newList.css';
import Button from '../Button/button';
import CardInfo from '../../widgets/cardIn/cardInfo';
import {firebaseTeams, firebaseLooper, firebaseArticles} from '../../../firebase';

// import {URL} from '../../../config';


export default class NewsList extends Component {

    state = {
        items:[],
        teams:[],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        ammount: this.props.amount

    }

    componentDidMount(){


        this.request(this.state.start+1, this.state.end);
        
    }

    request = (start, end) =>{
        // if(this.state.teams.length <1){
        //     axios.get(`${URL}/teams`)
        //     .then(response =>{
        //         this.setState({
        //             teams:response.data
        //         })
        //     })
        // }

        if(this.state.teams.length<1){
            firebaseTeams.once('value')
            .then((snapshot)=>{
                const teams = firebaseLooper(snapshot);
                this.setState(
                    teams
                )
            })
        }
        // console.log(this.state.teams)
        // firebaseArticles.once('value')
        //     .then((snapshot)=>{
        //         const articles = firebaseLooper(snapshot);
        //         this.setState(
        //             articles
        //         )
        //     })

         firebaseArticles.orderByChild("id").startAt(start)
         .endAt(end)
         .once('value')
         .then((snapshot)=>{
             const articles = firebaseLooper(snapshot);
             this.setState({
                items:[...this.state.items, ...articles],
                start,
                end

             })
         })

         .catch(e=>{
             console.log(e)
         })

        // axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        // .then(response =>{
        //     this.setState({
        //         items:[...this.state.items, ...response.data]
        //     })
        // })
    }

    loadMore = () =>{
        if(this.state.start < 18){
            this.setState({
                start: this.state.end
            })
    
            this.setState({
                end: this.state.start + this.state.ammount
            })
            // let end = this.state.end + this.state.amount;
            this.request(this.state.start, this.state.end);
        }
        
    }
    renderNews =(type) =>{
        let template = null;

        switch(type){
            case('card'):
                template= this.state.items.map((item, i) =>(
                    <CSSTransition
                        classNames={{ 
                            enter: 'newsList_wrapper',
                            enterActive: 'newsList_wrapper_enter'

                         }}
                         timeout = {500}
                         key ={i}
                    >
                        <div >
                       <div className = "newsList_item">
                           <Link to={`/articles/${item.id}`}>
                                {/* teams */}
                                <CardInfo teams = {this.state.teams}
                                    team = {item.team}
                                    date = {item.date}
                                />
                                <h2>{item.title}</h2>

                           </Link>
                       </div>
                    </div>
                    </CSSTransition>
                    
                ))
            break;

            default:
                template = null;
        }
        return template;

    }

  render() {
    //   console.log(this.state.items)
    // console.log("Inicio "+this.state.start);
    // console.log("fim "+this.state.end);
    console.log();
    return (
        <div>
            <TransitionGroup
                component = "div"
                className = "list"
            >
                
            </TransitionGroup>
            {this.renderNews( this.props.type) }

        <Button
            type="loadMore"
            loadMore = {()=>this.loadMore()}
            cta="Load More news"
         />
            {/* <div onClick = {()=>this.loadMore()}>
                Load +
            </div> */}
        </div>
        
    );
  }
}
