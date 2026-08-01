import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';
import slugify from 'slugify';
import { useCart } from 'react-use-cart';

const SingleCard = ({ allitems, id, img, title, price }) => {
    
    const { addItem } = useCart();

    return (
        <Col sm={6} md={4}>
            <Card>
                <Link to={`/products/${id}`} >
                    <Card.Img style={{ objectFit: "contain", height: "150px" }} variant="top" src={img} />
                </Link>
                <Card.Body>
                    <Card.Title>{title.substring(0, 20)}...</Card.Title>
                    <Card.Text>
                        ${price}
                    </Card.Text>

                    <button onClick={() => { addItem(allitems) }} className='btn btn-warning me-1'>Add to cart</button>
                    <Link to={`/products/${id}`} className="btn btn-primary">Read More</Link>
                </Card.Body>
            </Card>
        </Col >
    );
}

export default SingleCard;