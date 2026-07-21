import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import SingleCard from '../components/SingleCard';
import { ClimbingBoxLoader } from 'react-spinners';

const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("https://mocki.io/v1/116c840e-6a2e-4017-84e7-905f2c2b9f6c")
            .then(res => setProduct(res.data))
    }, [])
    console.log(product);
    
    return (
        <>
            <h1 className='mt-5 text-center'>Products List</h1>
            {/* <Row className='mt-5 g-4'>
                {product.length === 0 ?
                    <div className='d-flex justify-content-center'>
                        <ClimbingBoxLoader size={20} />
                    </div> :
                    product.map(item => (
                        <SingleCard
                            key={item.id}
                            img={item.image}
                            title={item.title}
                            price={item.price}
                            id={item.id}
                        />
                    ))}
                { }
            </Row> */}
        </>
    )
}

export default Products