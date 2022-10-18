import React from 'react'
import api from '../../app/App'

const AdminClientView = (props) => {
    
    return (
        <tr>
            <td className='color-scheme text-center'><a href='#' onClick={props.onClick} className='atag-color' id='firstName'>{props.firstName}</a></td>      
            <td className='color-scheme text-center'><a href='#' onClick={props.onClick} className='atag-color' id='email'>{props.email}</a></td>
            <td className='color-scheme text-center'><a href='#' onClick={props.onClick} className='atag-color' id='specialNeed'>{props.specialNeed}</a></td>
            <td className='color-scheme text-center'>
            <button onClick={props.delete} id={props.deleteId} className='btn-background-color text-color' name='id'>Delete</button>
            </td>
        </tr>       
    )
}

export default AdminClientView