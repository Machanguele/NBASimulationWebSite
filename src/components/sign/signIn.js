import React, { Component } from 'react';
import './signIn.css';
import {firebaseDB, firebase,  getNome, getPass, funcao
    } from '../../firebase';
import {Link} from 'react-router-dom';


export default class SignIn extends Component {

    state = {
        registerEror: '',
        loading:false,
        // formData:{
            email:'',
            password:''

        // }

    }

    handleNameChange = (event)=>{
        // console.log(event.target.value)
        this.setState({
            email: event.target.value
        })
    }
    handleLastNameChange = (event)=>{
        // console.log(event.target.value)
        this.setState({
            password: event.target.value
        })
    }

        enviar=(event)=>{
            event.preventDefault();
            // console.log(this.state)
            firebase.auth()
            .createUserWithEmailAndPassword(this.state.email,
                this.state.password)
                .then(()=>{
                    this.props.history.push('/')
                }).catch(erro=>{
                    alert("Erro :" +erro.message)
                })

            
          
           
                // firebaseDB.ref('users').push(this.state)
                alert('Adicionou :'+ this.state.email +' a Lista');
     }

    
     logar=(event)=>{
        event.preventDefault();
        firebase.auth()
        .signInWithEmailAndPassword(this.state.email,
            this.state.password)
            .then(()=>{
                funcao(this.state.email, this.state.password)
                 this.props.history.push('/dash')
             
            }).catch(erro=>{
                alert("Erro :" +erro.message)
            })

            
            // console.log(getNome()+" Palavra passe "+getPass())
     }

     dados= (nome, paswd)=>{
         nome = this.state.email;
         paswd= this.state.password;

     }


    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        {/* <label>Username</label> */}
                        <input 
                            placeholder="email"
                            className = "element"
                            type="email"
                            onChange = {this.handleNameChange}
                            value={this.state.email}

                        />

                    </div>

                    <div className="for_element">
                        {/* <label>password</label> */}
                        <input 
                            placeholder="Password"
                            className = "element"
                            type="password"
                            onChange = {this.handleLastNameChange}
                            value={this.state.password}
                        />
                    </div>
                    <button className="bt"  onClick={this.enviar}>Regiustar</button>
                    <button className="btr" onClick={this.logar}>Login</button>
                </form>
            </div>
        )
}
}
