import React from 'react'
import { Dropdown } from 'react-bootstrap'
import '../../api/api'

const ProviderView = (props) => {
    return (
        <tr>
            <td><Dropdown>
                <Dropdown.Toggle className='color-scheme col-12'>
                    {props.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item >Location: {props.locale}</Dropdown.Item>
                    <Dropdown.Item >I Am Available: {props.available}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown></td>
        </tr>
    )
}

export default ProviderView