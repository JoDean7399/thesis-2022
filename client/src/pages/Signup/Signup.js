import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom' 
import {handleSignup} from '../../api/api';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            email:'',
            password:''
        }
    }

    signup = async (e) => {
        e.preventDefault();
        // Since React nullifies properties within an event, we must use the 'persist'
        // event to pass along native properties of an element so we can reset the form
        e.persist();
        const {username, email, password} = this.state;
        // Create user object
        const newUser = {
            username,
            email,
            password
        }
       await handleSignup(newUser)
        .then(res=> {            // Reset state
            this.setState({
                username:'',
                email:'',
                password:''
            });
            // Store the jwt token here and redirect user to dashboard
            const { token } = res.data;
            window.localStorage.setItem('api_token', token);
            window.location = '/';
        })
        .catch(err=>{
            console.log(err)
            alert('Something went wrong saving user.')
        });
    }

    render() {
        console.log(this.state)
        return (
            <div className='wrapper' id='client'>
                <h1 className='text-center mt-5 text-color'>Welcome</h1>
                <h3 className='text-center text-color'>Sign up Today to Enjoy Our Site!</h3>
                <form className="form" onSubmit={(e)=>this.signup(e)}>
                    <h4>Username</h4>
                    <input 
                        onChange={e=> this.setState({username:e.target.value})}
                        type="text" 
                        className="form-control" 
                        name="username" 
                        required />
                    <h4>Email</h4>
                    <input
                        onChange={e=> this.setState({email:e.target.value})}
                        type="email"
                        className="form-control" 
                        name="username" 
                        required />
                    <h4>Password</h4>
                    <input 
                        onChange={e=> this.setState({password:e.target.value})}
                        type="password" 
                        className="form-control" 
                        name="username" 
                        required />
                    <Button className='btn-background-color text-color' type='submit'>Submit</Button>
                </form>
                <p>
                    Already a user? <Link to='/login'>Login</Link> here.
                </p>
            </div>
        )
    }
}

export default Signup;