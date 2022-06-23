import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <div className="container">
    <div className="m-5 p-5">

    <Link to="/prodlist"><button className="btn btn-primary">View Product List</button></Link>
    <Link to="/custlist"><button className="btn btn-success">View Customer List</button></Link>
    <button className="btn btn-danger">View Order List</button>
    </div>
    </div>
  )
}
