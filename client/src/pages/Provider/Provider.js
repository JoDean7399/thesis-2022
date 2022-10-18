import React, { Component } from 'react'
import api from '../../api/api'
import { Container, Col, Form, Button, Modal, Row, Table } from 'react-bootstrap'
import ProviderView from '../../components/Providers/ProviderView'
import './Provider.css'

class Provider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            providers: [],
            showModal: false    
        }  
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal=()=> {
        this.setState({ showModal: false })
        this.componentDidMount()
    }

    handleProvider = (e) => {
        e.preventDefault()       
        api.insertProvider(this.state).then().then(provider => {
            this.setState({
                name: '',
                locale: '',
                available: '',
                showModal:true,
                _id: provider.data.id
            })
        })
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await api.getProviders().then().then(providerInfo => {
            this.setState({
                providers: providerInfo.data,
                isLoading: false
            })
        })   
    }
    //This logs the new data in the console
    componentDidUpdate() { 
        let {providers} = this.state  
        if (this.state._id) {
            for (let i = 0; i < providers.length; i++) {
                if (providers[i]._id !== this.state._id) {
                    api.getProviders(this.state).then().then(data => {
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
                        <Modal.Title>You're A Provider</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='color-scheme'>Thanks for Your Willingness to Foster, You'll Be Contacted Soon!!</Modal.Body>
                    <Modal.Footer className='color-scheme'>
                        <Button onClick={this.closeModal} className='btn-background-color text-color'>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Container fluid id='provider' className='m-0 p-0'>
                    <h1 className='text-center text-color h1-font-size-position'>Foster Providers</h1>
                    <Row>
                        <Col  sm={6} className='pr-0 mt-5'>
                        <h3 className='text-color h3-font-size'>Providers</h3>
                            <Table striped bordered className='col-6'>
                                <thead>
                                    <tr className='color-scheme'>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.isLoading ?
                                        <tr><td>Please wait</td></tr>
                                        :
                                        this.state.providers.map((provider, idx) => (
                                            <ProviderView
                                                key={idx}
                                                id={provider._id}
                                                name={provider.name}
                                                locale={provider.locale}
                                                available={provider.available}
                                            />
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Col>
                        <Form onSubmit={this.handleProvider} className='p-0 mt-5'>
                            <Col sm={6}>
                                <h3 className='text-color h3-font-size'>Become A Provider for a Special Needs Cat</h3>

                                <h4 className='text-color h4-font-size mt-2'>Name</h4>
                                <input type='text'
                                    name='name'
                                    onChange={(event) => this.setState({ name: event.target.value })}
                                    className='col-4' required />
                            </Col>
                            <Col>
                                <h4 className='text-color h4-font-size mt-2'>Location</h4>
                                <input type='text'
                                    name='locale'
                                    onChange={(event) => this.setState({ locale: event.target.value })}
                                    className='col-4' required />
                            </Col>
                            <Col>
                                <h4 htmlFor="option-select" className='mt-2 h4-font-size text-color'>Are You Available?:</h4>
                                    <select id="option-select" onChange={(event) => this.setState({ available: event.target.value })} name='available'>
                                    <option value="">--Please choose an option--</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                    </select>
                            </Col>
                            <Col>
                                <Button type="submit" className="btn mt-3 btn-background-color text-color">Be A Provider</Button>
                            </Col>

                        </Form>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Provider