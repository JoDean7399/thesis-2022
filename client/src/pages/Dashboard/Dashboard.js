import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import  {userInfo} from '../../api/api'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentDidMount = () => {
        userInfo().then(res => {
            const {user} = res.data;
            this.setState({
                user: user
            });
        });
    }

    render() {
        const {username} = this.state.user;
        return (
            <>
            <Container fluid id='home' className='p-0'>
            <h1 className='text-center text-color h1-font-size-position'>Have A Special Needs Cat/Kitten Fostered or Become A Loving Foster to a Special Needs Cat/Kitten</h1>
            <Row className='m-0 p-0'>
                <h3 className='text-color mt-3 p-0 m-0'>A Little About Us</h3>
            </Row>
            <Row className='mb-5'> 
                <h4 className= 'mb-0 mt-2 col-9 text-color'>Our goal is to ensure that all special needs cats find a loving home. Not all cats come to us with all their faculties. Some aren't blessed with legs or they may be deaf or blind. We are here to pair cat lovers that want to make sure that these unfortunate blessings get a loving home to live out their lives happily. While at our site we invite you to...</h4>
            </Row>
            <Row className='mb-5'>
                <h5 className= 'mb-0 mt-2 col-9 text-color'>Go to the <Link to='/signup' className='link-color'>Sign Up</Link> page to become a client and find a foster home for your special needs cat/kittern. Once you've signed up you'll be able to see a list of providers and update your information. We hope that possibly you've found a loving home for your special needs cat/kitten. If that's the case you'll be able to delete your information here as well.</h5>
            </Row>
            <Row className='mb-5'>
            <h5 className= 'mb-0 mt-2 col-9 text-color'>Go to our <Link to='/login' className='link-color '>LogIn</Link> page to login if you're already a patron of our site. Once you've logged in you'll be able to navigate to our pages.</h5>
        </Row>
        </Container>
         </>
        )
    }
}

export default Dashboard;