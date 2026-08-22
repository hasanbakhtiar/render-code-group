import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { useSelector } from 'react-redux'

const Products = () => {
  const productData = useSelector(p => p.product);
  const categoryData = useSelector(p => p.category);
  return (
    <div>
      <h1 className='text-center my-5'>Products</h1>
      <Row>
        <Col sm={12} md={3}>
          <ul className="list-group">
            {categoryData.map((item,index)=>(
              <li key={index} className="list-group-item">{item.title}</li>

            ))}
          </ul>

        </Col>
        <Col sm={12} md={9}>
          <Row className='g-3'>
            {productData.map(item => (
              <SingleCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Products