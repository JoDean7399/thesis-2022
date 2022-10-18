import React, { useState } from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import '../../app/App'
import  './AdminLogin.css'

const AdminLogin= () =>{
    const[inputs, setInputs]=useState({})
    //This set the inputs values for the admin login
    const handleChange=(e)=>{
        const login=e.target.name
        const value=e.target.value
        setInputs(values=>({...values, [login]:value,}))
    }
    //This checks to see if the info in the inputs matches. If it does it will go to the AdminPage otherwise it won't 
    const handleSubmit=(e)=>{
        e.preventDefault() 

        if(e.target.login.value==='Jo'&&e.target.password.value==='7399'){
            window.location='/AdminPage' 
        }   
    }

    return (
                    <>
                        <Container fluid id='admin' className='color-scheme text-center'>
                            <h1 className='text-color h1-font-size-position'>Admin Sign In</h1> <Form className='mt-5' onSubmit={handleSubmit}>
        
                                <input type='text' value = {inputs.login||''}
                                name='login'
                                placeholder='Admin Login' onChange= {handleChange} required /><br />
        
                                <input type='password' value = {inputs.password||''}
                                name='password' placeholder='Admin Password' className='mt-5' onChange= {handleChange} required /><br />
        
                                <Button id="ownerAdmin" type="submit" className="mt-5 btn-background-color text-color">Go To Admin Page</Button>
                            </Form>
                        </Container>
                    </>
                )
}

export default AdminLogin