import { Container, Row } from 'react-bootstrap'
import products from '../data/products'
import SingleCard from './SingleCard'

const Products = () => {
    return (
        <Container className='mt-5'>
            <Row className='g-3'>
                {products.map((item,index) => (
                    <SingleCard key={index} title={item.title} photo={item.image} />
                ))}
            </Row>
        </Container >
    )
}

export default Products