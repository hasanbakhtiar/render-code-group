import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleCard = ({ id, image, title, price }) => {
    return (
        <Col sm={6} md={3} >
            <div className="card">
                <img height={300} style={{objectFit:"contain"}} src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}</p>
                    <Link to={`products/${id}`} className="btn btn-dark">Read more</Link>
                </div>
            </div>
        </Col>

    )
}

export default SingleCard