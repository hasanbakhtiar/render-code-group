import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='container'>
            <h1 className='my-5 text-center'>Dashboard</h1>
            <div className="d-flex align-items-center justify-content-center">
                <Col md={5}>
                    <ul className='list-group '>
                        <Link className='list-group-item text-center' to="/dashboard/product">Products</Link>
                        <Link className='list-group-item text-center' to="/dashboard/category">Category</Link>
                    </ul>
                </Col>
            </div>
        </div>
    )
}

export default Dashboard