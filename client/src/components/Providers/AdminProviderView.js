import React from 'react'
import api from '../../app/App'

const AdminProviderView = (props) => {
    return (
        <tr>
            <td className='color-scheme text-center'><a href='#' onClick={props.onClick} className='atag-color' id='name' name={props.nameState}>{props.name}</a></td>       
            <td className='color-scheme text-center'><a href='#' onClick={props.onClick} className='atag-color' id='locale' name={props.nameState}>{props.locale}</a></td>
            <td className='color-scheme text-center'><a href='#' onClick={props.onClick} className='atag-color' id='available' name={props.nameState}>{props.available}</a></td>
            <td className='color-scheme text-center'>
                <button onClick={props.update} id={props.updateId} className='btn-background-color text-color' name='id'>Update</button>
            </td>
        </tr>       
    )
}

export default AdminProviderView