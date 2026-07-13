import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const SingleCard = ({ image, title, url, desc }) => {
    return (
        <Col sm="6" md="4">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button variant="dark" href={url} target='_blank'>More details</Button>
                </Card.Body>
            </Card>

        </Col>
    )
}

export default SingleCard