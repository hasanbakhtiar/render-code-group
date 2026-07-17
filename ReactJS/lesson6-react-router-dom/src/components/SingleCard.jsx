import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleCard = ({ img, title, price }) => {
    return (
        <Col sm={6} md={4}>
            <Card>
                <Card.Img  style={{objectFit:"contain",height:"150px"}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title.substring(0,20)}...</Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default SingleCard;