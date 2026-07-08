import { Button, Card, Col } from 'react-bootstrap';

const SingleCard = ({ title, photo }) => {
  return (
    <Col sm="6" md="3">
      <Card >
        <Card.Img style={{ height: "300px", objectFit: "contain" }} variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{title.substring(0, 10)}...</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="dark">Read More</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleCard;