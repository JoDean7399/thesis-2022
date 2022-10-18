import React from 'react'
import { Dropdown } from 'react-bootstrap'
import  '../../api/api'

const ClientView = (props) => {
    return (
        <tr>
            <td><Dropdown>
                <Dropdown.Toggle className='color-scheme col-12'>
                    {props.firstName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item >Cat's Special Need: {props.specialNeed}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown></td>
        </tr>
    )
}

export default ClientView