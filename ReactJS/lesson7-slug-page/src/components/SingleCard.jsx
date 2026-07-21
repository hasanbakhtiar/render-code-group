import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';
import slugify from 'slugify';

const SingleCard = ({ id, img, title, price }) => {
    return (
        <Col sm={6} md={4}>
            <Card>
                <Card.Img style={{ objectFit: "contain", height: "150px" }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title.substring(0, 20)}...</Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                    {/* Eger slugify ile mehsul fetch olunarsa */}
                    {/* <Link to={`/products/${slugify(id,{lower:true})}`} className="btn btn-primary">Read More</Link> */}
                    <Link to={`/products/${id}`} className="btn btn-primary">Read More</Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default SingleCard;