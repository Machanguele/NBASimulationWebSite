import React, { Component } from 'react';
//import '../../fire';
import '../../firebase';
import * as firebase from 'firebase';

export default class TesteFirebase extends Component {
    state = {
        data:[]
    }


    componentDidMount(){
        firebase.database()
        .ref('articles')
        .once('value')
        .then(valores =>{
            // console.log(valores.val())
            valores.forEach(item =>{
                // this.state.data.push(item.val())
                this.state.data.push(item.val())
            })

        })
    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                Helo world
            </div>
        )
    }
}
