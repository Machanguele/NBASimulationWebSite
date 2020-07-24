import React, { Component } from 'react';
import {dados} from './sign/signIn';
import {getNome, getPass } from '../firebase';
import {firebaseDB, firebase} from '../firebase';

export default class Dashboard extends Component {

    state = {
        email:getNome(),
        pass: getPass(),
        poster: '',
        msg: ''
        
    }
    
   

    handleNameChange = (event)=>{
        // console.log(event.target.value)
        this.setState({
            poster: event.target.value
        })
    }
    handleLastNameChange = (event)=>{
        // console.log(event.target.value)
        this.setState({
            msg: event.target.value
        })
    }

        enviar=(event)=>{
            event.preventDefault();
            firebaseDB.ref('pub').push(this.state);

            
     }






    

    render() {
        // console.log(this.getNome())
        return (
            <div>
                Dashboard
                Nome: <h2>{this.state.email}</h2>
                Password: <h3>{this.state.pass}</h3>
                
            <div>
                <form>
                    
                        {/* <label>Username</label> */}
                        <input 
                            placeholder="Nome do preenchedor"
                            className = "element"
                            type="text"
                            onChange = {this.handleNameChange}
                            value={this.state.poster}

                        />

                   

                   
                        {/* <label>password</label> */}
                            <textarea 
                            placeholder="Asunto"
                            className = "element"
                            type=""
                            onChange = {this.handleLastNameChange}
                            value={this.state.msg}>

                        </textarea>
                        
                   
                    <button className="bt"  onClick={this.enviar}>Postar</button>
                    
                </form>
            </div>


            </div>
        
    )
}
}
