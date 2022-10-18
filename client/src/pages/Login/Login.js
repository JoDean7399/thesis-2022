import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {handleLogin} from '../../api/api'

import {Link} from 'react-router-dom'; 
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    login = async (e) => {
        e.preventDefault();
        // Since React nullifies properties within an event, we must use the 'persist'
        // event to pass along native properties of an element so we can reset the form
        e.persist();        
        const {email, password} = this.state;
        const user = {
            email,
            password
        }        
    await handleLogin(user)
            .then(res => {
                // Store the jwt token here and redirect user to dashboard
                const { token } = res.data;                // Reset state
                this.setState({
                    username:'',
                    email:'',
                    password:''
                });                window.localStorage.setItem('api_token', token);
                window.location = '/';
            })
            .catch(err=>{
                console.log(err)
                alert('Invalid credentials.')
            });
    }
    
    render() {        
        return (
            <div className='wrapper' id='client'>
                <h1 className='text-center mt-5 text-color'>Login</h1>
                <form className="form" onSubmit={(e)=>this.login(e)}>
                    <h4>Email</h4>
                    <input 
                        onChange={e => this.setState({email: e.target.value})}
                        type="email" 
                        className="form-control" 
                        name="username" 
                        required />
                    <h4>Password</h4>
                    <input 
                        onChange={e => this.setState({password: e.target.value})}
                        type="password" 
                        className="form-control" 
                        name="username" 
                        required />
                    <Button className='btn-background-color text-color' type='submit'>Submit</Button>
                </form>
                <p>
                    Dont have an account? <Link to='/signup'>Sign up</Link> here.
                </p>
            </div>
        )
    }
}

export default Login;