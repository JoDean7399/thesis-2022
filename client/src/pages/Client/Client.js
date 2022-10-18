import React, { Component } from 'react'
import api from '../../api/api'
import { Container, Col, Form, Button, Modal, Row, Table} from 'react-bootstrap'
import ClientView from '../../components/Clients/ClientView'
import './Client.css'
import '../../app/App.css'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts:[],
            showModal: false
        }
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal = () => {
        this.setState({ showModal: false })
        this.componentDidMount()
    }
    
    handleContact = (e) => {
        e.preventDefault()
        api.insertContact(this.state).then().then(contact => {
            console.log(contact, 'contact in Contact.js');
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                specialNeed: '',
                showModal:true,
                _id:contact.data.id
            })
        })
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await api.getContacts().then().then(contactInfo => {
            this.setState({
                contacts: contactInfo.data,
                isLoading: false
            })
        })   
    }

    componentDidUpdate() { 
        let {contacts} = this.state    
        if (this.state._id) {
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i]._id !== this.state._id) {
                    api.getContacts(this.state).then().then(data => {
                        console.log(data, "here it is");
                        
                    })
                }
            }     
        }    
    }

    render() {
        return (
            <>
                <Modal show={this.state.showModal}>
                    <Modal.Header className='color-scheme'>
                        <Modal.Title>You've Been Added</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='color-scheme'>Thanks for Choosing Jo's, We'll Contact You Soon</Modal.Body>
                    <Modal.Footer className='color-scheme'>
                        <Button onClick={this.closeModal} className='btn-background-color text-color'>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Container fluid id='client' className=''>
                    <h1 className='text-center h1-font-size-position'>Register to have Your Special Needs Cat/Kitten Fostered</h1>
                    <Row>
                        <Col className='mt-5'>
                            <h3 className=' h3-font-color'>Please Enter Your Information to Register</h3>
                            <Form onSubmit={this.handleContact} id='form'>
                                <Col className='mt-2'>
                                    <h4 className='contacth4 form-font-size-color'>First Name</h4>
                                    <input type='text'
                                        value={this.state.firstName || ''}
                                        name='firstName'
                                        onChange={(event) => this.setState({ firstName: event.target.value })}
                                        className='col-4 col-sm-8' required />
                                </Col>
                                <Col className='mt-lg-2'>
                                    <h4 className=' contacth4 form-font-size-color'>Last Name</h4>
                                    <input type='text'
                                        value={this.state.lastName || ''}
                                        name='lastName'
                                        onChange={(event) => this.setState({ lastName: event.target.value })} className='col-4 col-sm-8' required />
                                </Col>
                                <Col className='mt-lg-2'>
                                    <h4 className='contacth4 form-font-size-color'>Email</h4>
                                    <input type='email'
                                        value={this.state.email || ''}
                                        name='email'
                                        onChange={(event) => this.setState({ email: event.target.value })} className='col-4 col-sm-8' required />
                                </Col>
                                <Col className='mt-lg-2'>
                                    <h4 htmlFor="name" className='contacth4 form-font-size-color'>Phone Number(10 to 16 Numbers):</h4>
                                    <input type="text" className='col-4 col-sm-8' name="number" value={this.state.phoneNumber || ''} required
                                        onChange={(event) => this.setState({ phoneNumber: event.target.value })}
                                        minLength="10" maxLength="16" size="10" pattern="[0-9-]+" />
                                </Col>
                                <Col className='mt-lg-2'>
                                    <h4 className='form-font-size-color'>Cat's Special Need</h4>
                                    <input type='text'
                                        value={this.state.specialNeed || ''}
                                        name='specialNeed'
                                        onChange={(event) => this.setState({ specialNeed: event.target.value })}
                                        className='col-4 col-sm-8' required />
                                </Col>
                                <Col className=''>
                                    <button type='submit' className="btn btn-background-color mt-2">Register</button>
                                </Col>
                            </Form>
                        </Col>
                        <Col>
                            <h3 className='mt-5 text-color'>Clients</h3>
                            <Table striped bordered className='col-6'>
                                <thead>
                                    <tr className='color-scheme'><th>First Name</th></tr>
                                </thead>
                                <tbody>
                                    {this.state.isLoading ?
                                        <tr><td>Please wait</td></tr>
                                        :
                                        this.state.contacts.map((contact, idx) => (
                                            <ClientView
                                                key={idx}
                                                id={contact._id}
                                                firstName={contact.firstName}
                                                specialNeed={contact.specialNeed}
                                            />
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                
                    

                </Container>
            </>
        )
    }
}

export default Contact