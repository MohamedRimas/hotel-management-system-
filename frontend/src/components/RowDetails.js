import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function RowDetails({fullname,nic,phone,email,check_in,check_out,no_of_rooms,totalmember,payment,Id ,OnDelete}) {

  return (

<tr>
    <th>{fullname}</th>
    <td>{nic}</td>
    <td>{phone}</td>
    <td>{email}</td>
    <th>{check_in}</th>
    <td>{check_out}</td>
    <td>{no_of_rooms}</td>
    <td>{totalmember}</td>
    <td>{payment}</td>
 
    <td className="gap__actions">
    <span className="badge bg-info">

    <Link to={`/${Id}`} className="text-white">
      <i className="fas fa-edit"></i>
      </Link>
      </span>          

    <span className="badge bg-danger" onClick={()=>OnDelete(Id)}>
      <i className="fas fa-trash-alt"></i></span>
    </td>
    </tr>

  )
}

export default RowDetails
