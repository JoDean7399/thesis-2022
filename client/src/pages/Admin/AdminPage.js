import React, { Component } from 'react'
import { Button, Col, Container, Modal, Row, Table } from 'react-bootstrap'
import api from '../../api/api'
import AdminProviderView from '../../components/Providers/AdminProviderView'
import AdminClientView from '../../components/Clients/AdminClientView'
import './AdminPage.css'
import '../../app/App.css'

class AdminPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            providers: [],
            showModal: false,            
            confirm: false,
            id: "",
            closeModal: this.closeModal.bind(this)
        }
            //This gets the id contact and sets the state name to the id to be used in the comfirmDelete()
    this.delete = (e) => {
        e.preventDefault()
        console.log(e.target, 'e.target in delete'); 
        this.setState({
            showModal: true,
            [e.target.name]: e.target.id
        })
        
    }
    //This deletes the contact
    this.confirmDelete = (e) => {
        e.preventDefault()
        api.deleteContactById(this.state.id).then().then(data => {
            if (data.data.authenticated === true) {
                this.setState({
                    id: ""
                })
            }
        })
        this.closeModal()
        window.location = '/AdminPage'
    }
    //This sets the state for the provider info
    this.collectUpdate= (e) => {
         this.setState({
             [e.target.id]: e.target.value
         })
         console.log(this.state, 'this is state');
         
    }
    //this creates new inputs/select to get the new info for the update for the provider
    this.getNewInfo = (e) =>{
        e.preventDefault()
        this.setState({
            id: e.target.name
        })
        let input = document.createElement('input')
        let select = document.createElement('select')
        input.classList.add('form-control')
        select.classList.add('form-control')
        select.innerHTML = `<option>Choose Yes or No</option>
        <option value='yes'>Yes</option>
        <option value='no'>No</option>`
        input.placeholder = e.target.innerText
        input.id = e.target.id
        select.id = e.target.id
        if(e.target.id==='available'){
            e.target.replaceWith(select)
        }else{
            e.target.replaceWith(input)
            input.addEventListener('change', this.collectUpdate)
        }
    }
    //This updates the provider info
    this.update= (e) => {
        e.preventDefault()
      
        api.updateProviderById(this.state).then().then(updatedInfo => {
            window.location.reload(true)
        
        })
     
    }
}

    closeModal = () => {
        this.setState({ showModal: false });
    }
   

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await api.getAllInfo().then(combinedInfo => {
            this.setState({
                contacts: combinedInfo.data.contact,
                providers: combinedInfo.data.provider,
                isLoading: false,
            })
        })
    }

    render() {
        return (
            <>
                <Modal show={this.state.showModal}>
                    <Modal.Header className='color-scheme'>
                        <Modal.Title>Delete Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='color-scheme'>Would You Like to Delete The Account?</Modal.Body>
                    <Modal.Footer className='color-scheme'>
                        <Button onClick={this.closeModal} className='btn-background-color text-color'>
                            Close
                        </Button>
                        <Button onClick={this.confirmDelete} className='btn-background-color text-color'>
                            Delete Account
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Container fluid className='color-scheme' id='adminPage'>
                    <h1 className='text-color text-center h1-font-size-position'>Welcome Jo</h1><a href='home'><h3 className='text-color text-center'>Logout</h3></a>
                    <h3 className='text-color'>Providers</h3>
                    <Row>
                        <Col>
                            <Table striped bordered>
                                <thead>
                                    <tr className='color-scheme'>
                                        <th>Name</th>
                                        <th>Location</th>
                                        <th>Availability</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.isLoading ?
                                        <tr><td>Please wait</td></tr>
                                        :
                                        this.state.providers.map((provider, idx) => (
                                            <AdminProviderView
                                                key={idx}
                                                onClick={this.getNewInfo}
                                                id={provider._id}
                                                nameState = {provider._id}
                                                name={provider.name}
                                                locale={provider.locale}
                                                available={provider.available}
                                                update={this.update}
                                                updateId={provider._id}
                                            />

                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <h3 className='text-color'>Clients</h3>
                    <Row>
                        <Col>
                            <Table striped bordered>
                                <thead>
                                    <tr className='color-scheme'>
                                        <th>First Name</th>
                                        <th>Email</th>
                                        <th>Special Need</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.isLoading ?
                                        <tr><td>Please wait</td></tr>
                                        :
                                        this.state.contacts.map((contact, idx) => (
                                            <AdminClientView
                                                key={idx}
                                                onClick={this.getNewInfo}
                                                id={contact._id}
                                                firstName={contact.firstName}
                                                email={contact.email}
                                                specialNeed={contact.specialNeed}
                                                delete={this.delete}
                                                deleteId={contact._id}
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
export default AdminPage