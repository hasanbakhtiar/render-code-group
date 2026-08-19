import React from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { useSelector } from 'react-redux'

const Products = () => {
  const productData = useSelector(p => p);
  return (
    <div>
      <h1 className='text-center my-5'>Products</h1>
      <Row>
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
    </div>
  )
}

export default Products